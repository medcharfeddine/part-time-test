import DefaultBox from "./assets/Models/model_00.svg";
import OpenBox1 from "./assets/Models/model_01.svg";
import OpenBox2 from "./assets/Models/model_02.svg";
import OpenBox4 from "./assets/Models/model_04.svg";
import OpenBox5 from "./assets/Models/model_05.svg";

const products = [
  {
    id: Math.random(),
    image: DefaultBox,
    name: "Default Model",
    description: "Description of the box, mention the number of sides.",
  },
  {
    id: Math.random(),
    image: OpenBox1,
    name: "Model 1",
    description: "Description of the box, mention the number of sides.",
  },
  {
    id: Math.random(),
    image: OpenBox2,
    name: "Model 2",
    description: "Description of the box, mention the number of sides.",
  },
  {
    id: Math.random(),
    image: OpenBox4,
    name: "Model 3",
    description: "Description of the box, mention the number of sides.",
  },
  {
    id: Math.random(),
    image: OpenBox5,
    name: "Model 4",
    description: "Description of the box, mention the number of sides.",
  },
];

export default products;