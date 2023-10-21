import { MDXDirMetadata } from "@/app/thoughts/(thoughts)/directory";
import ArcGradientCards from "@/app/projects/(project-md)/arc-gradient-cards.mdx";
import ReactFibreExperiment from "@/app/projects/(project-md)/react-three-fiber-playground.mdx";

type Category = string;
type Title = string;
export type DirectoryMetadataWCat = Record<
  Category,
  Record<Title, MDXDirMetadata>
>;

const metadata: DirectoryMetadataWCat = {
  "Design Experiments": {
    "arc-gradient-cards": {
      title: "arc-gradient-cards",
      displayTitle: "Arc Gradient Cards",
      component: <ArcGradientCards />,
      description: "A simple card component with an arc gradient background.",
      cdate: "19/09/2023",
    },
    "react-three-fiber": {
      title: "react-three-fiber",
      displayTitle: "React Three Fiber Experimental Playground",
      component: <ReactFibreExperiment />,
      description: "Playing with 3D designs using react-three-fiber.",
      cdate: "19/10/2023",
    },
  },
};

export default metadata;
