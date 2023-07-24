import { apple, bill, google, yeye } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={yeye} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Yeye <br className="sm:block hidden" /> Gestion de stock
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Avec ce logiciel disponible sur telephone , ordinateur et tablet
        vous pouvez gerer votre stock facilement et rapidement partout
        dans le monde.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="http://ultra-glk.com" target="_blank">
          <button class="mr-4 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none">Tester</button>
        </a>
        <Button text="Appeler le 94 86 58 79" />
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" /> */}
        {/* <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;
