// Local texture paths for better reliability
export const EARTH_TEXTURES = {
  colorMap: '/textures/earth_daymap.jpg',
  normalMap: '/textures/earth_normal.jpg',
  specularMap: '/textures/earth_specular.jpg',
  cloudsMap: '/textures/earth_clouds.jpg'
} as const;

export const FALLBACK_MATERIAL_CONFIG = {
  color: '#4870df',
  wireframe: true,
  transparent: true,
  opacity: 0.6
} as const;