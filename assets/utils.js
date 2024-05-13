/** @param {paperNamespace.PathItem[]} paths */
export function uniteAll(paths) {
  let result = paths[0]
  for (let i = 1; i < paths.length; i++) {
    result = result.unite(paths[i], { insert: false })
  }
  project.activeLayer.addChild(result)
  return result
}

/** @param {paperNamespace.PathItem[]} paths */
export function intersectAll(paths) {
  let result = paths[0]
  for (let i = 1; i < paths.length; i++) {
    result = result.intersect(paths[i], { insert: false })
  }
  project.activeLayer.addChild(result)
  return result
}

/** @param {paperNamespace.PathItem[]} paths */
export function subtractAll(paths) {
  let result = paths[0]
  for (let i = 1; i < paths.length; i++) {
    result = result.subtract(paths[i], { insert: false })
  }
  project.activeLayer.addChild(result)
  return result
}

/** @param {paperNamespace.PathItem[]} paths */
export function excludeAll(paths) {
  let result = paths[0]
  for (let i = 1; i < paths.length; i++) {
    result = result.exclude(paths[i], { insert: false })
  }
  project.activeLayer.addChild(result)
  return result
}

/** @param {paperNamespace.PathItem[]} paths */
export function divideAll(paths) {
  let result = paths[0]
  for (let i = 1; i < paths.length; i++) {
    result = result.divide(paths[i], { insert: false })
  }
  project.activeLayer.addChild(result)
  return result
}
