export const updateFolderStructure = (elem, parentPath) => {
  const currentPath = (parentPath && parentPath + '\\' + elem.name) || elem.name;
  const updatedChildren = elem.children && elem.children.map(el => updateFolderStructure(el, currentPath));
  return {
    ...elem,
    path: currentPath,
    children: updatedChildren,
  };
};
