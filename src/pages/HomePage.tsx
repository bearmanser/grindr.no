import { Box, Separator } from "@chakra-ui/react";
import { ContentSection } from "../components/HomePage/ContentSection";
import { Footer } from "../components/HomePage/Footer";
import { MainImageWithQuote } from "../components/HomePage/MainImageWithQuote";
import { ItemGrid } from "../components/HomePage/ItemGrid";

export function HomePage() {
  return (
    <Box bg="background.primary" color="text.primary" overflow={"hidden"}>
      <MainImageWithQuote />

      {/* Content Sections */}
      {[
        {
          title: "The Infallible Genius",
          text: "I don’t need caffeine; my brain runs on pure genius.",
          image: "pic9.png",
          reverse: false,
        },
        {
          title: "The Walking Perfection",
          text: "Why settle for good when you can have me?",
          image: "pic4.png",
          reverse: true,
        },
        {
          title: "The Master of Logic",
          text: "I don’t do trial and error. I do trial and success.",
          image: "pic14.png",
          reverse: false,
        },
        {
          title: "The Center of Attention",
          text: "I don’t try to be the center of the universe; it just naturally orbits around me.",
          image: "pic7.png",
          reverse: true,
        },
        {
          title: "The Effortlessly Elite",
          text: "I don’t chase greatness. Greatness chases me.",
          image: "pic11.png",
          reverse: false,
        },
        {
          title: "The Blueprint of Success",
          text: "Others have dreams. I have plans.",
          image: "pic12.png",
          reverse: true,
        },
      ].map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}

      <>
        <Separator mt={16} mb={2} borderColor={"text.accent"} />
        <Separator mb={16} mt={2} borderColor={"text.accent"} />
      </>

      {/* Skills and Projects Grids */}
      <ItemGrid
        title="Where Genius Meets Execution"
        items={[
          "projects/iqu.png",
          "projects/virtual_assistant.png",
          "projects/fortress_of_the_undead.png",
          "projects/this_incredible_website.png",
        ]}
        itemSize="200px"
      />
      <>
        <Separator mt={16} mb={2} borderColor={"text.accent"} />
        <Separator mb={16} mt={2} borderColor={"text.accent"} />
      </>
      <ItemGrid
        title="The Tools of a Visionary"
        items={[
          "skills/react_native_logo.png",
          "skills/fastapi_logo.png",
          "skills/django_logo.png",
          "skills/flask_logo.png",
          "skills/crestron_logo.png",
          "skills/git_logo.png",
          "skills/github_logo.png",
          "skills/esp32_logo.png",
          "skills/ai_logo.png",
          "skills/python_logo.png",
          "skills/cplusplus_logo.png",
          "skills/csharp_logo.png",
          "skills/html_logo.png",
          "skills/javascript_logo.png",
          "skills/photoshop_logo.png",
          "skills/gamedev_logo.png",
          "skills/3d_design_logo.png",
        ]}
        itemSize="100px"
      />
      <>
        <Separator mt={16} mb={2} borderColor={"text.accent"} />
        <Separator mb={16} mt={2} borderColor={"text.accent"} />
      </>

      <Footer />
    </Box>
  );
}
