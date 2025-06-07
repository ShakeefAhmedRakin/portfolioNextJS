import { Badge } from "@/components/ui/badge";
import { headingVariants, TypographyP } from "@/components/ui/typography";

export default function ResearchGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-1">
        <Badge className="text-[10px]" variant={"destructive"}>
          ONGOING
        </Badge>
        <h3 className={headingVariants({ level: "h4", className: "truncate" })}>
          Malaysian Sign Language Real-Time Tutorial using CNN Algorithm
        </h3>
        <TypographyP level="small" className="text-foreground/65 line-clamp-3">
          The communication challenges faced by people with hearing and speech
          impairments in Malaysia are made worse by effective resources for
          learning Malaysian Sign Language (MSL). The Malaysian Sign Language
          Real Time Tutorial (MASRETT) is an instructional website designed to
          decrease the communication gap between both disabled and non-disabled.
          MASRETT is developed to assist in learning fundamental MSL virtually
          besides reducing the communication barriers which leads to a better
          and stronger social relation in Malaysia. Agile software development
          is the methodology of choice for creating this system since it
          facilitates the iterative identification and correction of mistakes.
          The artificial intelligence (AI) model which is convolutional Neural
          Network (CNN) algorithm is used to recognize the sign language input.
          The findings indicate that MASRETT significantly enhances
          accessibility and effectiveness of MSL learning particularly for
          individuals with lack access to traditional classes. However, the
          results showed that only 33% of the signatures are recognized using
          CNN algorithm for real time signs detection. It is observed that the
          results are not significant because of the limitation in data and
          inefficient model usage and can be improved using improved algorithm
          as in future work.
        </TypographyP>
      </div>
      <div className="space-y-1">
        <Badge className="text-[10px]" variant={"success"}>
          PUBLISHED
        </Badge>
        <h3 className={headingVariants({ level: "h4", className: "truncate" })}>
          Optimizing American Sign Language Recognition with Binarized Neural
          Networks: A Comparative Study with Traditional Models
        </h3>
        <TypographyP level="small" className="text-foreground/65 line-clamp-3">
          {`Sign language is crucial for communication among individuals with
          hearing or speech impairments. Automated recognition systems are
          essential for learning and translating different sign language
          variants. However, these systems often face high computational demands
          and large memory footprints, limiting their use in real-time and
          resource-constrained environments. This research develops an optimized
          pipeline for American Sign Language (ASL) recognition, comparing
          Binarized Neural Networks (BNNs) with traditional full-precision
          neural networks. Using Larq, a library for training binarized models,
          we leverage BNNs' reduced memory and computational needs, suitable for
          embedded systems and edge devices. The study uses a dataset of ASL
          alphabet images, applying data augmentation to address data imbalance
          and occlusions. Both binarized and traditional models are trained and
          evaluated on accuracy, precision, recall, F1-score, memory footprints,
          and inference times. Results show that BNNs offer competitive
          performance with significantly lower computational requirements,
          demonstrating their potential for efficient and accessible ASL
          recognition systems.`}
        </TypographyP>
      </div>
    </div>
  );
}
