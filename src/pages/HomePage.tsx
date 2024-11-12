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
          {
            src: "projects/iqu.png",
            title: "iQU",
            link: "https://iqu.no/",
            status: "In progress",
          },
          {
            src: "projects/virtual_assistant.png",
            title: "Virtual Assistant",
            link: "/#/coming-soon/",
            status: "In progress",
          },
          {
            src: "projects/fortress_of_the_undead.png",
            title: "Fortress of the Undead",
            link: "https://store.steampowered.com/app/2379830/Fortress_of_the_Undead/",
            status: "Completed",
          },
          {
            src: "projects/this_incredible_website.png",
            title: "This Incredible Website",
            link: "/",
            status: "In progress",
          },
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
          { src: "skills/html_logo.png" },
          { src: "skills/css_logo.png" },
          { src: "skills/javascript_logo.png" },
          { src: "skills/typescript_logo.png" },
          { src: "skills/react_native_logo.png" },
          { src: "skills/chakra_ui_logo.png" },
          { src: "skills/tailwind_logo.png" },
          { src: "skills/vite_logo.png" },
          { src: "skills/webpack_logo.png" },

          { src: "skills/fastapi_logo.png" },
          { src: "skills/django_logo.png" },
          { src: "skills/flask_logo.png" },
          { src: "skills/nodejs_logo.png" },
          { src: "skills/mqtt_logo.png" },
          { src: "skills/chirpstack_logo.png" },
          { src: "skills/lora_wan_logo.png" },
          { src: "skills/knx_logo.png" },
          { src: "skills/modbus_logo.png" },
          { src: "skills/mbus_logo.png" },
          { src: "skills/circut_board_logo.png" },
          { src: "skills/websocket_logo.png" },
          { src: "skills/nginx_logo.png" },
          { src: "skills/linux_logo.png" },
          { src: "skills/google_cloud_logo.png" },
          { src: "skills/docker_logo.png" },

          { src: "skills/python_logo.png" },
          { src: "skills/cplusplus_logo.png" },
          { src: "skills/csharp_logo.png" },

          { src: "skills/react_native_logo.png" },
          { src: "skills/flutter_logo.png" },
          { src: "skills/xamarin_logo.png" },

          { src: "skills/git_logo.png" },
          { src: "skills/github_logo.png" },
          { src: "skills/jira_logo.png" },

          { src: "skills/esp32_logo.png" },
          { src: "skills/arduino_logo.png" },
          { src: "skills/mqtt_logo.png" },
          { src: "skills/crestron_logo.png" },

          { src: "skills/ai_logo.png" },
          { src: "skills/tensorflow_logo.png" },
          { src: "skills/pytorch_logo.png" },
          { src: "skills/numpy_logo.png" },
          { src: "skills/matplotlib_logo.png" },
          { src: "skills/scipy_logo.png" },
          { src: "skills/scikit_learn_logo.png" },

          { src: "skills/influx_logo.png" },
          { src: "skills/maria_db_logo.png" },
          { src: "skills/mongo_db_logo.png" },
          { src: "skills/mysql_logo.png" },

          { src: "skills/vscode_logo.png" },
          { src: "skills/prettier_logo.png" },
          { src: "skills/eslint_logo.png" },
          { src: "skills/postman_logo.png" },
          { src: "skills/pytest_logo.png" },

          { src: "skills/unity_logo.png" },
          { src: "skills/unreal_logo.png" },
          { src: "skills/3d_design_logo.png" },

          { src: "skills/photoshop_logo.png" },
          { src: "skills/garage_band.png" },

          { src: "skills/pornhub_logo.png" },
          { src: "skills/charisma_logo.png" },
          { src: "skills/arrogant_killer_clown.png" },
          { src: "skills/homeassistant_logo.png" },
          { src: "skills/windows_server_logo.png" },
          { src: "skills/copyright_logo.png" },
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
