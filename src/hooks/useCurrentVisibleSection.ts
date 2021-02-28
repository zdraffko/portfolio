import useScroll from "./useScroll";

const useCurrentVisibleSection = () => {
  const { isVisible: isVisibleHome, elementId: homeId } = useScroll("home");
  const { isVisible: isVisibleProjects, elementId: projectsId } = useScroll("projects");
  const { isVisible: isVisibleAbout, elementId: aboutId } = useScroll("about");
  const { isVisible: isVisibleContact, elementId: contactId } = useScroll("contact");

  let visibleSectionId = "home";

  if (isVisibleHome) {
    visibleSectionId = homeId;
  } else if (isVisibleProjects) {
    visibleSectionId = projectsId;
  } else if (isVisibleAbout) {
    visibleSectionId = aboutId;
  } else if (isVisibleContact) {
    visibleSectionId = contactId;
  }

  return { visibleSectionId };
};

export default useCurrentVisibleSection;
