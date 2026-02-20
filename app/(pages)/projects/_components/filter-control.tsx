import Link from "next/link";
import { projectCategoriesEnum } from "@/types/enums";
import { buttonVariants } from "@/components/ui/button";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { siteNavigationMap } from "@/content/site-navigation";

export default function FilterControls({
  activeCategory,
}: {
  activeCategory: string | undefined;
}) {
  return (
    <ul className={cn(ANIMATE_FADE_UP, "mb-4 flex flex-wrap gap-1.5")}>
      <li>
        <FilterButton category="All" activeCategory={activeCategory} />
      </li>
      {projectCategoriesEnum.map((category) => (
        <li key={category}>
          <FilterButton category={category} activeCategory={activeCategory} />
        </li>
      ))}
    </ul>
  );
}

function FilterButton({
  category,
  activeCategory,
}: {
  category: string;
  activeCategory: string | undefined;
}) {
  const isAll = category === "All";
  const isActive = isAll ? !activeCategory : category === activeCategory;

  const href = isAll
    ? `${siteNavigationMap.PROJECTS.href}`
    : isActive
      ? `${siteNavigationMap.PROJECTS.href}`
      : `${siteNavigationMap.PROJECTS.href}?category=${encodeURIComponent(category)}`;

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "secondary",
        size: "sm",
        className: "group py-4.5",
      })}
    >
      <div className="border-primary flex aspect-square w-4.5 items-center justify-center border">
        <IoMdCheckmark
          className={cn(
            "text-[2px] opacity-0 duration-300 group-hover:opacity-30",
            isActive &&
              "bg-primary text-primary-foreground opacity-100 group-hover:opacity-100",
          )}
        />
      </div>
      {category}
    </Link>
  );
}
