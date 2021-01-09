<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-four-fifths">
        <h1 class="main__title">
          Community Event Campaign
        </h1>
      </div>

      <div class=" column is-two-thirds">
        <h2 class="main__subtitle">
          Informational printed and digital pieces for community organizations,
          neighbors, and volunteers at large.
        </h2>
      </div>
      <div class="column is-full"><hr /></div>
      <img
        class="banner__image image is-5by3 column is-full"
        src="https://miro.medium.com/max/1400/1*jgbhTVmwq8xxSYWxNj6hbQ.png"
      />

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Campaign Design</li>

          <li>Adobe</li>

          <li>2020 Fall (3 weeks)</li>
        </ul>
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Overviews </span>
        <p class="body__text">
          This is a series of print designs to promote a specific Pittsburgh
          community to come out and paint the pavement with their neighbors.
        </p>
      </div>

      <div class="column is-full">
        <img
          class="banner__image image is-5by3 column is-half"
          src="https://miro.medium.com/max/1400/1*T7D12FfkZnwgip0TXykWJA.png"
        />
        <span class="image__text ibm__typeface">
          Asphalt Design. More information about the asphalt art can be found
          here: <router-link to="/AsphaltArt"> Asphalt Art</router-link>.
        </span>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Designs</span>
      </div>

      <div class="column is-full">
        <div class="columns is-multiline">
          <span class="image__text ibm__typeface">
            Main Posters
          </span>
          <img
            class="image is-5by3 column is-full"
            src="https://miro.medium.com/max/2000/1*UXlrsaUz0tF-4wynxUu3uw.png"
          />
          <img
            class="image is-5by3 column is-full"
            src="https://miro.medium.com/max/2000/1*bEKh0b3creLQ6DdK1BtCYQ.png"
          />
          <img
            class="image is-2by3 column is-half"
            src="https://miro.medium.com/max/1000/1*Itu_lY5eF1rAu7YYOp-h8g.png"
          />
          <img
            class="image is-2by3 column is-half"
            src="https://miro.medium.com/max/1000/1*Qf3dE9RSoQelJnl8bmYHcA.png"
          />
          <span class="image__text ibm__typeface">
            Info Brochure
          </span>
          <img
            class="image is-5by3 column is-full"
            src="https://miro.medium.com/max/2000/1*TnOz_BlLsjFIMkJR4JhZFw.png"
          />
          <img
            class="image is-5by3 column is-full"
            src="https://miro.medium.com/max/2000/1*QUs2tTQnaXGSfnQtDE7T-w.png"
          />
          <span class="image__text ibm__typeface">
            Web Design
          </span>
          <img
            class="image is-5by3 column is-full"
            src="https://miro.medium.com/max/2000/1*vHVbcaDyBekm4ZKItFY5QA.png"
          />
          <img
            class="image image__side__padding is-5by3 column is-one-third"
            src="https://miro.medium.com/max/2000/1*kPeeEX_5U7ja5IF-5MtkmA.png"
          />
          <img
            class="image image__side__padding is-5by3 column is-one-third"
            src="https://miro.medium.com/max/2000/1*fLihBaF-nGk_lj_qcN62QQ.png"
          />
          <img
            class="image  is-5by3 column is-one-third"
            src="https://miro.medium.com/max/2000/1*TAGUcLwib62P-ZHMdoCv-g.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DancePosterSubpage",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/project_styling.scss";
@import "@/assets/styles/functional.scss";
</style>
