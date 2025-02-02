import Body from "./_articleSections/body";
import Header from "./_articleSections/header";

export default function ArticleComponent({
  idOfCurrentAchievement,
}: {
  idOfCurrentAchievement: string;
}) {
  return (
    <>
      <article>
        <Header idOfCurrentAchievement={idOfCurrentAchievement} />
        <Body idOfCurrentAchievement={idOfCurrentAchievement} />
      </article>
    </>
  );
}
