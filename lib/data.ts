// Aquí puedes personalizar tus habilidades, proyectos y datos personales.

export const SKILLS = {
  "Lenguajes": ["JavaScript", "Python", "HTML/CSS"],
  /* "Frontend": ["React", "Next.js", "Tailwind CSS", "Framer Motion"], */
  /* "Backend": ["Node.js", "Express", "PostgreSQL", "REST APIs"], */
  "Herramientas": ["Blender", "Photoshop","Visual Studio Code"],
};

export const PROJECTS = [
  {
    title: "Texture Pack Minecraft",
    description: "Este texturepack añade pocas cosas por ejemplo un nuevo fondo de menu y algunas pocas texturas y nombres similares al de java",
    tags: ["json", "Minecraft Texture Pack", "Bedrock Edition"],
    // --- NUEVO ---
    imageUrl: "/images/texturepack.webp", // Ruta a la imagen del proyecto
    // --- NUEVO Y OPCIONAL ---
    downloads: [
      { label: "Descargar para Bedrock", url: "/downloads/JmTexturepack(Bedrock).rar" },
      { label: "Descargar para Java", url: "/downloads/JmTexturepack(Java).rar" },
    ],
  },
  {
    title: "Super Mario Bros DS Romhack",
    description: "¡Adéntrate en una aventura inusual con  New Super Mario Bros. J ! Descubre el misterio de la enigmática J que ha aparecido en el primer nivel y prepárate para un viaje donde lo familiar se vuelve extrañamente nuevo. ¿Estás listo para desentrañar el secreto de la J?",
    tags: ["NSMB Editor", "Romhack", "Nintendo DS"],
    // --- NUEVO ---
    imageUrl: "/images/mario_romhack.webp",
    downloads: [
      { label: "Descargar", url: "/downloads/New super mario brosJM.rar" },
    ],
    // Este proyecto no tiene 'downloadUrl', por lo que no mostrará el botón.
  },
  {
    title: "Rus Addon",
    description: "¡Dale la bienvenida a RusAddon a tu mundo de Minecraft Bedrock! Adopta a Rus, un fiel perro con su propia cama, pelota, hueso y cuenco de comida. ¡Disfruta de la compañía de tu nuevo amigo peludo en tus aventuras!",
    tags: ["Json", "Minecraft Addon", "Bedrock Edition"],
    // --- NUEVO ---
    imageUrl: "/images/rus_addon.webp",
    downloads: [
      { label: "Descargar", url: "/downloads/RusAddon.mcaddon" },
    ],
    // Este proyecto no tiene 'downloadUrl', por lo que no mostrará el botón.
  },
  {
    title: "Jm-Theme",
    description: "Renueva tu entorno de programación con Jm-Theme, un tema para Visual Studio Code que cambia sutilmente tu fondo para una nueva perspectiva. Experimenta cómo un simple ajuste de color puede inspirar tu productividad. Dale una J de giro a tu espacio de trabajo.",
    tags: ["Json", "Visual Studio Code", "Tema"],
    // --- NUEVO ---
    imageUrl: "/images/jm_theme.webp",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=Jmgamer1199.jm-theme",
    // Este proyecto no tiene 'downloadUrl', por lo que no mostrará el botón.
  },
  {
    title: "Pokeball 3d",
    description: "Aquí está mi modelo 3D de una Poké Ball; fue mi primer intento y aún estoy aprendiendo a texturizar, por lo que verás algunos errores. Pero estoy orgulloso de la forma, y creo que la esencia de la Poké Ball está ahí.",
    tags: ["Blender", "Photoshop", "3D Model"],
    imageUrl: "/images/pokeball_reflejos.webp",
    downloads: [
      { label: "Descargar", url: "/downloads/Pokeball.blend" },
    ],
  },
{
    title: "Generador QR",
    description: "Crea códigos QR al instante desde tu terminal con esta sencilla app de Python. Introduce tu URL y genera un código QR que se guarda como imagen. Rápido, eficiente y fácil de usar.",
    tags: ["Python", "QR Code", "Generador"],
    /* imageUrl: "/images/pokeball_reflejos.webp", */
    repoUrl: "https://github.com/jmgamer1199/QR-code-generator.git",
  },
  
/*{
    title: "Portafolio Personal v1",
    description: "La primera versión de mi portafolio, construida para aprender los fundamentos de React y el diseño web responsivo.",
    tags: ["React", "CSS Modules", "JavaScript"],
    // Este proyecto no tiene 'imageUrl' ni 'downloadUrl'.
    liveUrl: "https://ejemplo.com",
    repoUrl: "https://github.com/tu-usuario/portafolio-v1",
  },
  */
];