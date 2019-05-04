function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function findModuleIndex(name) {
  return availableModules.findIndex(module => module.name === name);
}

// Load 'life-support' module
loadModule(findModuleIndex('life-support'));