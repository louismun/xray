const BASE = import.meta.env.BASE_URL;

export const items = [
  {
    id: "skull",
    name: "Skull - Facial Skeleton",
    subcategories: [
      {
        name: "Skull",
        items: [
          {
            id: "skull-pa",
            name: "Skull PA",
            images: [
              `${BASE}images/anatomy/skull/skull-pa-1.png`,
              `${BASE}images/anatomy/skull/skull-pa-2.png`
            ],
            description:
              "It falls perpendicular to the plane of support, in the Inion and emerges in the Nasion.",
            lighting:
              "It falls perpendicular to the plane of support, in the Inion and emerges in the Nasion.",
            ir: "10x12 in",
            orientation: "portrait",
            position:
              "It can be in a supine position, sitting, or standing. The sagittal median plane is perpendicular and coincident with the midline of the table, the orbital meatus plane is perpendicular to the support plane, to achieve these parameters, the patient is asked to rest the forehead and nose on the midline of the table.",
            qa: `- Complete visualization of the cranial shell.
- Identification of the patient's right.
- Crags occupying the lower 2/3 of the orbit.
- Equidistance between the innominate-cranial shell line on both sides.`,
            sid: "40 in"
          },
          {
            id: "skull-ap",
            name: "Skull AP",
            images: [
              `${BASE}images/anatomy/skull/skull-ap-1.png`,
              `${BASE}images/anatomy/skull/skull-ap-2.png`
            ],
            description:
              "Shows the entire skull in lateral projection including cranial sutures and mandible."
          },
          {
            id: "skull-lateral",
            name: "Skull Lateral",
            images: [
              `${BASE}images/anatomy/skull/skull-lateral-1.png`,
              `${BASE}images/anatomy/skull/skull-lateral-2.png`
            ],
            lighting:
              "The cross influences the nasion. It falls perpendicular to the support plane, longitudinal beam coinciding with the sagittal median plane, and the transverse beam coinciding with the orbital meatus plane. The transverse beam passes through the external ear canals. The ray emerges in the inion.",
            chassis: "24x30 located longitudinally"
          }
        ]
      }
    ]
  },

  {
    id: "upper-limbs",
    name: "Upper Limbs",
    subcategories: [
      {
        name: "Shoulder",
        items: [
          {
            id: "shoulder-ap",
            name: "Shoulder AP",
            images: [
              `${BASE}images/anatomy/upper-limbs/shoulder-ap-1.png`,
              `${BASE}images/anatomy/upper-limbs/shoulder-ap-2.png`
            ],
            description: "WIP"
          }
        ]
      },
      {
        name: "Elbow",
        items: [
          {
            id: "elbow-ap",
            name: "Elbow AP",
            images: [
              `${BASE}images/anatomy/upper-limbs/elbow-ap-1.png`,
              `${BASE}images/anatomy/upper-limbs/elbow-ap-2.png`
            ],
            description: "WIP"
          },
          {
            id: "elbow-oblique",
            name: "Elbow Oblique",
            images: [
              `${BASE}images/anatomy/upper-limbs/elbow-oblique-1.png`,
              `${BASE}images/anatomy/upper-limbs/elbow-oblique-2.png`
            ],
            description: "WIP"
          }
        ]
      }
    ]
  },

  {
    id: "chest",
    name: "Chest - Thoracic Vertebrae",
    subcategories: [
      {
        name: "Chest",
        items: [
          {
            id: "chest-pa",
            name: "Chest PA",
            images: [
              `${BASE}images/anatomy/chest/chest-pa-1.png`,
              `${BASE}images/anatomy/chest/chest-pa-2.png`
            ],
            description: "WIP"
          },
          {
            id: "chest-lateral",
            name: "Chest Lateral",
            images: [
              `${BASE}images/anatomy/chest/chest-lateral-1.png`,
              `${BASE}images/anatomy/chest/chest-lateral-2.png`
            ],
            description: "WIP"
          }
        ]
      }
    ]
  }

  // 👇 keep rest of your structure the same using `${BASE}...` for ALL images
];