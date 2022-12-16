import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/Layout/thumbnail.png";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import StyledExternalLink from "../../components/global/StyledExternalLink";
import FullLine from "../../components/project/FullLine";
import layoutArchitecture from "../../public/assets/Layout/layout-architecture.png";
import Pipeline from "../../public/assets/Layout/pipeline.png";

const page_key = "LayoutGeneration";

const project_idx = projectByOrder.indexOf(page_key);
const page_data = projects_data[project_idx];

export default function LayoutGeneration() {
  return (
    <div className={globalStyles.div_styles.page_outer_wrapper}>
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <Image src={hero_img} />
        {/* HEADER */}
        <div className='pb-12' id='work-page-header'>
          <h2 className={globalStyles.font_styles.h2 + " text-slate-600"}>
            GRAPHICAL LAYOUT GENERATION -
          </h2>
          {/* <h1 className={globalStyles.font_styles.h1}>
            {page_data.landing.subtitle}
          </h1> */}
          <div className='grid sm:grid-cols-2 sm:gap-12 gap-6'>
            <div>
              <h3 className={globalStyles.font_styles.h3}>
                <b>timeline</b> <br />
              </h3>
              <p className={globalStyles.font_styles.p}>December 2022</p>
            </div>

            <div>
              <h3 className={globalStyles.font_styles.h3}>
                <b>team</b> <br />
              </h3>
              <p className={globalStyles.font_styles.p}> Tom Chen </p>
            </div>
          </div>
        </div>
        {/* <ProjectHeader page_data={page_data} /> */}
        <FullLine />
        <div
          className='grid place-items-center auto-rows-max py-12 '
          id='work-main-content'
        >
          <div class='w-4/5'>
            {/* Section 1 */}
            <h2 className={globalStyles.font_styles.h2}>1. Introduction</h2>
            <p>
              From posters on bulletin boards to interactive user interfaces on
              mobile devices, layout is an essential component of designs across
              all mediums. We define layout as the arrangement of a finite
              collection of graphical elements defined by its bounding box
              coordinates, and its label, such as Title, Body Text, etc. We wish
              to output the most functional arrangement of the input set of
              graphical elements on a predefined canvas. We use the dataset we
              train on as the standard for good design, so we want to minimize
              the difference between our predicted grounding boxes of each
              graphical element with respect to their ground truth grounding box
              positions. The layout problem is impactful as graphic design is
              detrimental to delivering crucial information ranging from a
              kindergarten concert to a protest gathering. Without efficient and
              functional graphic design that involves an intuitive assemblage of
              graphical elements, people will be easily misguided and confused
              by the abundance of information, and miss out on important data
              they should take away. There are graphic designers who excel at
              building these visual systems and can do them in an efficient and
              effective manner, but the demand for good design simply outnumber
              the quantity of designers we have, and sadly, good designs often
              go unnoticed and unappreciated because of how smoothly they
              integrate with our environment, both physical and digital. To
              create actual change within any environment, the delivery of
              compelling information is key to inform, influence, and inspire.
              Just like what Kofi Annan once said,{" "}
              <i>Knowledge is power. Information is liberating. </i> Education
              is the premise of progress, in every society, in every family. The
              delivery of information depends on the design, and layout is a
              significant factor of a good design, therefore the layout problem
              is worth exploring, studying, and advancing.
            </p>

            {/* Section 2 */}
            <h2 className={globalStyles.font_styles.h2}>2. Related Work</h2>
            <p>
              <b>LayoutGAN </b>was the first proposed architecture to generate
              graphic layouts of a document. Its major downside is that it was
              really difficult to train.
            </p>
            <div class='py-4'>
              <Image src={layoutArchitecture} />
            </div>
            <p>
              Different from previous approaches, <b>Layout Transformer</b>{" "}
              attempted to tackle the layout generation problem by converting it
              into a sequence generation problem. The model takes in an input
              sequence that could contain an arbitrary amount of information
              about layout elements and predicts next layout elements based on
              previous layout-element-encoded sequence. In the figure above, the
              element at position 4 (marked blue), which semantically represents
              the height of a layout element, is predicted based on the previous
              elements (marked green). The masked self-attention layer in the
              block ensures that the model only sees previous elements when
              predicting the current element. Since document samples have
              different number of labeled layout elements, when we convert
              layout elements into a sequence, we pad the sequence into the max
              possible length within the dataset and add a special ⟨bos⟩ token
              in the beginning and ⟨eos⟩ token in the end. The mapping rule of a
              layout element to a chunk in the sequence is as followed: for a
              layout element that is a certain category (e.g. text) c, has a
              top-left coordinate (x, y) within the source image and has a width
              w and height h, it is mapped to a chunk in the sequence as (...,
              &lt;c&gt;, x, y, h, w, …) where &lt;c&gt; is a numerical encoding
              of the layout element category. It is worth mentioning that Layout
              Transformer does not account for the document genre. As
              illustrated in the architecture, the document genre information is
              not used in the training or testing phase. Therefore, the original
              Layout Transformer is insufficient to achieve a single model that
              was to generate varied layout styles based on a specific document
              genre.
            </p>

            {/* Section 3 */}
            <h2 className={globalStyles.font_styles.h2}>3. Methods</h2>
            <h3 className={globalStyles.font_styles.h3}>Method 1</h3>
            <p>
              Method 1: Separate genre training The first approach we attempted
              was to train a separate model for every genre. For model training,
              we used the DocLayNet dataset that contain 6 types of documents,
              including financial reports, scientific articles, patents,
              government tenders, laws and regulations and manuals. Each
              document sample was human-labeled with the document type and
              layout elements in the sample, including coordinates of their
              bounding boxes and their categories (e.g. texts, captions, page
              headers etc.). We divided the dataset by document type. To avoid
              unnecessary cost of computation resources, we only selected three
              document types (financial reports, scientific articles and
              patents) out of six to train three models, directly using the
              original Layout Transformer architecture, each of which was
              trained with using one type of document samples. We evaluated each
              model's performance and used these models as baseline to compare
              with the results from the second method.
            </p>
            <div class='py-4'>
              <Image src={Pipeline} />
            </div>
            <h3 className={globalStyles.font_styles.h3}>Method 2</h3>
            <p>
              Joint genre training The second approach we attempted was to train
              a single model that could understand the difference among document
              genres and generate layouts according to the input document genre.
              As explained in the Related Work: Layout Transformer section, the
              original Layout Transformer was insufficient to allow us to train
              a single model that generates varied layout styles based on a
              specific document genre. To fill the gap, we tried encoding the
              document genre information into the sequences by modifying the
              mapping rule from layout elements to sequence chunks. For a layout
              element that is from document genre (e.g. patents) g, is a certain
              category (e.g. text) c, has a top-left coordinate (x, y) within
              the source image and has a width w and height h, it is mapped to a
              chunk in the sequence as (..., &lt;g&gt;, &lt;c&gt;, x, y, h, w,
              …) where &lt;c&gt; is a numerical encoding of the layout element
              category and &lt;g&gt; is an encoding of the document genre. We
              applied this mapping rule to the training and validation datasets.
              The intuition was that during training, each sequence that
              represented all layout elements from one document sample would
              contain the same genre id, so all chunks in the sequence ought to
              have the same value for &lt;g&gt;. The model would learn to
              predict the correct genre id based on the previous sequence
              elements. In the validation phase, we input a short sequence that
              consists of 7 tokens: ( &lt;bos&gt;, &lt;g&gt;, &lt;c&gt;, x, y,
              h, w), which included the information about one layout element to
              the model and evaluated the resultant sequence predicted by the
              model based on the input sequence. Based on the genre id &lt;g&gt;
              encoded in the input sequence, a well-trained model under our
              approach ought to predict following layout elements that had the
              same genre id and holistically shared the inherent style unique to
              the document genre.
            </p>

            {/* Section 4 */}
            <h2 className={globalStyles.font_styles.h2}>
              4. Implementation Details
            </h2>
            <h3 className={globalStyles.font_styles.h3}>Training</h3>
            <p>
              Having engineered our dataset and input sequences, we used the
              same model architecture of the Layout Transformer. The model has
              several important parameters, including number of multi-attention
              heads, n, number of dimensions of the latent vectors representing
              each sequence element, d, and number of attention layers, L. We
              used d = 512, n = 8, L = 6 from the original Layout Transformer
              paper. To train the model, we applied cross entropy loss to
              compare the ground truth sequences and generated sequences. We
              used Adam optimizer with β1 = 0.9, β2 = 0.95 and learning rate 3 *
              10-4. Constrained by GPU memory available, we used a relatively
              small batch size of 16.
            </p>
            <h3 className={globalStyles.font_styles.h3}>Evaluation</h3>
            <p>
              For evaluation, we computed average validation loss across the
              entire validation dataset. We also implemented three evaluation
              metrics to further compare our approaches: coverage, overlap and
              intra-category intersection over union (IoU). Coverage and overlap
              were mentioned in the Layout Transformer paper, and we introduced
              the third metric, intra-category IoU. Coverage means the
              percentage of canvas covered by the layout elements. We calculated
              coverage for an image by computing the union area of all layout
              bounding boxes in an image and dividing the union area by the
              total image area. An effective model should produce layout
              elements that have similar coverage as the ground truth layout
              elements. Overlap represents the IoU of layout elements in an
              image. In the DocLayNet dataset, elements do not overlap with each
              other, so overlap ideally should be small. We calculated overlap
              for one image by summing up pairwise IoU between layout bounding
              boxes in the image. Intra-category IoU aims to estimate the model
              accuracy in predicting the layout elements that match the ground
              truth elements in their locations in the image and their
              categories. To compute this metric, we took each prediction layout
              box for an image, found its closest ground truth box with the same
              category, and calculated their IoU. Finally, we average these
              IoU’s to get the Intra-category IoU value for the image. The
              computational complexity for these metrics was non-trivial. The
              coverage computation for N rectangles was O(N3); the overlap
              computation for N rectangles was O(N2). Given the time constraint
              for our project, we sampled 16 documents from the validation
              dataset and computed average values of these three evaluation
              metrics on these samples every 2 epochs.
            </p>

            {/* Section 5 */}
            <h2 className={globalStyles.font_styles.h2}>5. Results</h2>
            <h3 className={globalStyles.font_styles.h3}>Result Discussion</h3>
            <p>
              Observing the generated samples at Epoch 0 and Epoch 10 from joint
              genre training (Method 2), we found that the model did effectively
              learn to generate layouts based on the input sequence that
              embedded the desired genre id. The effectiveness of learning was
              also demonstrated by the increasing trend in intra-IoU from 0.17
              after the first epoch to 0.26 after tenth epoch. We compared the
              effectiveness of Method 1 and 2 by setting up the following
              experiment: to evaluate either method, we randomly sampled 16
              documents – 10 from the financial report validation set, 3 from
              the scientific article validation set and 3 from the patent
              validation set. We sampled more financial report samples because
              there are significantly more financial reports in the DocLayNet
              dataset compared to the other 2 genres. To evaluate Method 1, we
              used the 3 trained genre-specific models to predict corresponding
              input genres and calculated the average GT/Prediction overlaps,
              average GT/Prediction overlaps coverage and average intra-IoU. To
              evaluate Method 2, we used the model that was trained in a
              joint-genre manner to predict another randomly selected 16 samples
              and computed the same average metrics. The comparison showed that
              Method 2 produced results with significantly lower overlap and
              higher intra-IoU. Method 1 did produce layout elements with
              coverage ratio closer to the ground truth boxes, but Method 2 also
              demonstrated its ability to generate document layouts that have a
              similar coverage as the ground truth layouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
