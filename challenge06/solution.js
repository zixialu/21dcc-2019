function loadModule(index) {
  const moduleToLoad = availableModules[index];
  moduleToLoad.enabled = true;
  ship.modules.push(moduleToLoad);
}

function findModuleIndex(name) {
  return availableModules.findIndex(module => (
    module.essential && module.name === name
  ));
}

loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
loadModule(findModuleIndex('navigation'));
