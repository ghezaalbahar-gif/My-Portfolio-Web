// Files in public/ keep their literal paths through the build, so the GitHub
// Pages base path has to be added by hand. Dev serves from / and gets it free.
export const asset = (path) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
