function countEssential() {
  return availableModules.filter(isEssential).length;
}

function isEssential(module) {
  return module.essential;
}
