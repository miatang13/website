<template>
  <div class="heatWaveShader">
    <fragShader class="shader" :shaderCode="shaderCode" />
  </div>
</template>

<script>
import FragShader from "./../Shader.vue";

export default {
  name: "HandMixerShader",
  components: {
    FragShader,
  },
  mounted() {},
  data() {
    return {
      shaderCode: `
          #ifdef GL_ES
precision mediump float;
#endif

#define MAX_MARCHING_STEPS 255
#define MIN_DIST 0.0
#define MAX_DIST 100.0
#define EPSILON 0.0001

mat3 rotateX(float theta) {
    float c = cos(theta);
    float s = sin(theta);
    return mat3(
        vec3(1, 0, 0),
        vec3(0, c, -s),
        vec3(0, s, c)
    );
}


mat3 rotateY(float theta) {
    float c = cos(theta);
    float s = sin(theta);
    return mat3(
        vec3(c, 0, s),
        vec3(0, 1, 0),
        vec3(-s, 0, c)
    );
}

mat3 rotateZ(float theta) {
    float c = cos(theta);
    float s = sin(theta);
    return mat3(
        vec3(c, -s, 0),
        vec3(s, c, 0),
        vec3(0, 0, 1)
    );
}


float intersectSDF(float distA, float distB) {
    return max(distA, distB);
}


float unionSDF(float distA, float distB) {
    return min(distA, distB);
}

float differenceSDF(float distA, float distB) {
    return max(distA, -distB);
}

float smoothUnionSDF( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float smoothSubtractionSDF( float d1, float d2, float k ) {
    float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
    return mix( d2, -d1, h ) + k*h*(1.0-h); }

float smoothIntersectionSDF( float d1, float d2, float k ) {
    float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) + k*h*(1.0-h); }

// r2 is thickness
// r1 is radius?
float linkSDF( vec3 p, float len, float r1, float r2 )
{
vec3 q = vec3( p.x, max(abs(p.y)-len,0.0), p.z );
return length(vec2(length(q.xy)-r1,q.z)) - r2;
}

float onionSDF( in float sdf, in float thickness )
{
    return abs(sdf)-thickness;
}


/**
* Signed distance function for a sphere centered at the origin with radius r.
*/
float sphereSDF(vec3 p, float r) {
return length(p) - r;
}


float sceneSDF(vec3 samplePoint) {    
    // Slowly spin the whole scene
    samplePoint = rotateY(iTime / 2.0) * samplePoint;
    
    float link = linkSDF(samplePoint * rotateY(50.0), 0.5, 0.9, 0.1) ;
    link = smoothUnionSDF(linkSDF(samplePoint * rotateY(300.0 *sin(iTime * 0.03)), 0.8, 0.9, 0.1) , link, 0.3);
    link = smoothUnionSDF(linkSDF(samplePoint * rotateY(300.0 *cos(iTime * 0.03)), 1.092, 0.2, 0.1) , link, 0.2);
    link = smoothUnionSDF(linkSDF(vec3(samplePoint.x, samplePoint.y + 2.3, samplePoint.z), 0.5, 0.1, 0.2) , link, 0.2);
    
    float thickness = 0.05;
    float offset =sin(1.7*iTime) * 2.0 + 1.5;
    float adjust = 1.5 * abs(sin(iTime)) + 0.3;
    float r1 = 0.05 *adjust;
    float r2 = 0.5 *adjust;
    float deco = linkSDF(samplePoint - vec3(offset, 0.0, 0.0), r1, r2, thickness);
    deco = unionSDF(linkSDF(samplePoint + vec3(offset, 0.0 ,0.0), r1, r2,thickness), deco);
    deco = unionSDF(linkSDF(samplePoint + vec3(offset , offset,0.0), r1, r2,thickness), deco);
    deco = unionSDF(linkSDF(samplePoint - vec3(offset , offset,0.0), r1, r2,thickness), deco);
    deco = unionSDF(linkSDF(samplePoint + vec3(offset , offset,offset), r1, r2,thickness), deco);
    deco = unionSDF(linkSDF(samplePoint - vec3(offset , offset,offset), r1, r2,thickness), deco);
    float finalSDF = smoothUnionSDF(deco,link, 0.8);
    
    return finalSDF;
}

float shortestDistanceToSurface(vec3 eye, vec3 marchingDirection, float start, float end) {
    float depth = start;
    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {
        float dist = sceneSDF(eye + depth * marchingDirection);
        if (dist < EPSILON) {
            return depth;
        }
        depth += dist;
        if (depth >= end) {
            return end;
        }
    }
    return end;
}
            

vec3 rayDirection(float fieldOfView, vec2 size, vec2 fragCoord) {
    vec2 xy = fragCoord - size / 2.0;
    float z = size.y / tan(radians(fieldOfView) / 2.0);
    return normalize(vec3(xy, -z));
}


vec3 estimateNormal(vec3 p) {
    return normalize(vec3(
        sceneSDF(vec3(p.x + EPSILON, p.y, p.z)) - sceneSDF(vec3(p.x - EPSILON, p.y, p.z)),
        sceneSDF(vec3(p.x, p.y + EPSILON, p.z)) - sceneSDF(vec3(p.x, p.y - EPSILON, p.z)),
        sceneSDF(vec3(p.x, p.y, p.z  + EPSILON)) - sceneSDF(vec3(p.x, p.y, p.z - EPSILON))
    ));
}

vec3 phongContribForLight(vec3 k_d, vec3 k_s, float alpha, vec3 p, vec3 eye,
                          vec3 lightPos, vec3 lightIntensity) {
    vec3 N = estimateNormal(p);
    vec3 L = normalize(lightPos - p);
    vec3 V = normalize(eye - p);
    vec3 R = normalize(reflect(-L, N));
    
    float dotLN = dot(L, N);
    float dotRV = dot(R, V);
    
    if (dotLN < 0.0) {
        // Light not visible from this point on the surface
        return vec3(0.0, 0.0, 0.0);
    } 
    
    if (dotRV < 0.0) {
        // Light reflection in opposite direction as viewer, apply only diffuse
        // component
        return lightIntensity * (k_d * dotLN);
    }
    return lightIntensity * (k_d * dotLN + k_s * pow(dotRV, alpha));
}


vec3 phongIllumination(vec3 k_a, vec3 k_d, vec3 k_s, float alpha, vec3 p, vec3 eye) {
    const vec3 ambientLight = 0.5 * vec3(1.0, 1.0, 1.0);
    vec3 color = ambientLight * k_a;
    
    vec3 light1Pos = vec3(4.0 * sin(iTime),
                          2.0,
                          4.0 * cos(iTime));
    vec3 light1Intensity = vec3(0.4, 0.4, 0.4);
    
    color += phongContribForLight(k_d, k_s, alpha, p, eye,
                                  light1Pos,
                                  light1Intensity);
    
    vec3 light2Pos = vec3(2.0 * sin(0.37 * iTime),
                          2.0 * cos(0.37 * iTime),
                          2.0);
    vec3 light2Intensity = vec3(0.4, 0.4, 0.4);
    
    color += phongContribForLight(k_d, k_s, alpha, p, eye,
                                  light2Pos,
                                  light2Intensity);    
    return color;
}


mat3 viewMatrix(vec3 eye, vec3 center, vec3 up) {
    // Based on gluLookAt man page
    vec3 f = normalize(center - eye);
    vec3 s = normalize(cross(f, up));
    vec3 u = cross(s, f);
    return mat3(s, u, -f);
}

void main()
{
    vec3 viewDir = rayDirection(45.0, iResolution.xy, gl_FragCoord.xy);
    vec3 eye = vec3(8.0, 5.0 * sin(0.2 * iTime), 7.0);
    
    mat3 viewToWorld = viewMatrix(eye, vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0));
    
    vec3 worldDir = viewToWorld * viewDir;
    
    float dist = shortestDistanceToSurface(eye, worldDir, MIN_DIST, MAX_DIST);
    
    if (dist > MAX_DIST - EPSILON) {
        // Didn't hit anything
        gl_FragColor = vec4(0.970,0.482,0.815,1.000);
        return;
    }
    
    // The closest point on the surface to the eyepoint along the view ray
    vec3 p = eye + dist * worldDir;
    
    // Use the surface normal as the ambient color of the material
    vec3 K_a = (estimateNormal(p) + vec3(1.0)) / 2.0;
    vec3 K_d = K_a;
    vec3 K_s = vec3(1.0, 1.0, 1.0);
    float shininess = 10.0;
    
    vec3 color = phongIllumination(K_a, K_d, K_s, shininess, p, eye);
    
    gl_FragColor = vec4(color, 1.0);
}
`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/shader_styling.scss";
</style>
