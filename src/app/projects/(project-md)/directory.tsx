import { MDXDirMetadata } from "@/app/thoughts/(thoughts)/directory";

// Design Experiments
import ArcGradientCards from "@/projects/arc-gradient-cards.mdx";
import MusicPlayer from "@/projects/music-player.mdx";
// import ReactFibreExperiment from "@/projects/react-three-fiber-playground.mdx";

// Hackathons
import DellHackathon from "@/projects/dell-hackathon.mdx";
import TaylorsHackathon from "@/projects/taylors-hackathon.mdx";
import PinataHackathon from "@/projects/devto-pinata-hackathon.mdx";
import SupabaseCTF from "@/projects/supabase-ctf.mdx";

// Academic and School
// import FYP from "@/projects/final-year-project.mdx";
// import UReview from "@/projects/ureview.mdx";

// Open source work and projects
import SprintMaster from "@/projects/sprintmaster.mdx";
import OSS from "@/projects/open-source-work.mdx";

export type Category =
  | "Design Experiments"
  | "Hackathons"
  | "Open Source and Projects";
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
      component: <ArcGradientCards key={"arc-gradient-cards"} />,
      description: "A simple card component with an arc gradient background.",
      cdate: "2023-09-19",
    },
    "music-player": {
      title: "music-player",
      displayTitle: "Music Player On the Web",
      component: <MusicPlayer key={"aotw-music-player"} />,
      description: "Practice for Animations On the Web Chapter 2",
      cdate: "2024-10-07",
    },
  },
  Hackathons: {
    "taylors-hackathon": {
      title: "taylors-hackathon",
      displayTitle: "🥈 Taylors ImpactHack",
      component: <TaylorsHackathon key={"Taylors-Hackathon"} />,
      description: "How Vercel and OpenAI won me a brief two day competition.",
      cdate: "2023-07-11",
    },
    "dell-hackathon": {
      title: "dell-hackathon",
      displayTitle: "🥉 Dell Hack2Hire",
      component: <DellHackathon key={"Dell-Hackathon"} />,
      description:
        "How Vercel, Prisma, Supabase and Chakra UI won me a brief two day competition.",
      cdate: "2022-11-05",
    },
    "devto-pinata-hackathon": {
      title: "devto-pinata-hackathon",
      displayTitle: "🥇 Dev.to Pinata Hackathon",
      component: <PinataHackathon key={"Pinata-Hackathon"} />,
      description:
        "How Vercel, Supabase, ShadcnUI and Pinata won me a brief two day competition.",
      cdate: "2024-10-12",
    },
    "supabase-ctf": {
      title: "supabase-ctf",
      displayTitle: "Supabase 2024 CTF Writeup",
      component: <SupabaseCTF key={"supabase-ctf-writeup"} />,
      description: "My first ever CTF, it was kinda fun",
      cdate: "2024-12-28",
    },
  },
  "Open Source and Projects": {
    sprintmaster: {
      title: "sprintmaster",
      displayTitle: "SprintMaster, AI Jira Helper",
      component: <SprintMaster key={"SprintMaster"} />,
      description: "An AI Jira helper to write sprints",
      cdate: "2023-02-01",
    },
    "open-source-work": {
      title: "open-source-work",
      displayTitle: "Open Source!? Me?",
      component: <OSS key={"Satori"} />,
      description: "RAHHHH WHAT IS OPEN SOURCE?!?!?",
      cdate: "2024-02-15",
    },
  },
  // "Academics and School": {
  //   "final-year-project": {
  //     title: "final-year-project",
  //     displayTitle: "FYP - Label Studio",
  //     component: <FYP key={"final-year-project"} />,
  //     description: "Final grade of 92, highest in my cohort.",
  //     cdate: "2023-08-10",
  //   },
  //   ureview: {
  //     title: "ureview",
  //     displayTitle: "UReview and University",
  //     component: <UReview key={"ureview"} />,
  //     description: "Managing unit feedback for Monash.",
  //     cdate: "2022-06-10",
  //   },
  // },
};

export default metadata;
