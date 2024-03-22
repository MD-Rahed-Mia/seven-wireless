import React from "react";
import "./OurTopic.scss";
import OurTopicOne from "./../../assets/image/our_topic_1.jpg";
import OurTopicTwo from "./../../assets/image/our_topic_2.jpg";
import OurTopicThree from "./../../assets/image/our_topic_three.jpg";

import OurTopicCard from "./OurTopicCard";
export default function OurTopic() {
  return (
    <div className="our-topic">
      <OurTopicCard
        bg={OurTopicOne}
        title="Designed for your comfort"
        desc="Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
          
          dolor sit amet consectetur adipiscing luctus nec 
          ullamcorper mattis, pulvinar dapibus leo."
      />
      <OurTopicCard
        bg={OurTopicTwo}
        title={"Clear sound"}
        desc={
          "Tincidunt tristique ipsum. Integer eget ornare nisi, suscipit porta orc. Donec suscipit mauris sit amet lobortis molestie. In hac habitasse platea dictumst. Duis eget maximus nibh, eu dapibus mauris."
        }
      />
      <OurTopicCard
        bg={OurTopicThree}
        title={"Modern aesthetics"}
        desc={
          "Duis augue lorem, tincidunt sit amet nisl at, tincidunt tristique ipsum. Integer eget ornare nisi, suscipit porta orc. Donec suscipit mauris sit amet lobortis molestie. In hac habitasse platea dictumst. Duis eget maximus nibh, eu dapibus mauris."
        }
      />
    </div>
  );
}
