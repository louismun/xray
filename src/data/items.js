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
            cm: 20,
            kVp: 85,
            mAs: 12.5,
            sid: "40\"",
            sidOriginal: "40 in"
          },
          {
            id: "skull-ap",
            name: "Skull AP",
            images: [
              `${BASE}images/anatomy/skull/skull-ap-1.png`,
              `${BASE}images/anatomy/skull/skull-ap-2.png`
            ],
            description:
              "Shows the entire skull in lateral projection including cranial sutures and mandible.",
            cm: 20,
            kVp: 85,
            mAs: 12.5,
            sid: "40\""
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
            chassis: "24x30 located longitudinally",
            cm: 15,
            kVp: 85,
            mAs: 6.3,
            sid: "40\""
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
            description: "WIP",
            cm: 18,
            kVp: 85,
            mAs: 10,
            sid: "40\""
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
            description: "WIP",
            cm: 8,
            kVp: 70,
            mAs: 2.5,
            sid: "40\""
          },
          {
            id: "elbow-oblique",
            name: "Elbow Oblique",
            images: [
              `${BASE}images/anatomy/upper-limbs/elbow-oblique-1.png`,
              `${BASE}images/anatomy/upper-limbs/elbow-oblique-2.png`
            ],
            description: "WIP",
            cm: 8,
            kVp: 70,
            mAs: 2.5,
            sid: "40\""
          }
        ]
      },
      {
        name: "Forearm",
        items: [
          {
            id: "forearm-ap",
            name: "Forearm AP",
            images: [
              `${BASE}images/anatomy/upper-limbs/forearm-ap-1.png`,
              `${BASE}images/anatomy/upper-limbs/forearm-ap-2.png`
            ],
            description: "WIP",
            cm: 7,
            kVp: 70,
            mAs: 2.2,
            sid: "40\""
          },
          {
            id: "forearm-lateral",
            name: "Forearm Lateral",
            images: [
              `${BASE}images/anatomy/upper-limbs/forearm-lateral-1.png`,
              `${BASE}images/anatomy/upper-limbs/forearm-lateral-2.png`
            ],
            description: "WIP",
            cm: 7,
            kVp: 70,
            mAs: 2.2,
            sid: "40\""
          }
        ]
      },
      {
        name: "Wrist",
        items: [
          {
            id: "wrist-pa",
            name: "Wrist PA",
            images: [
              `${BASE}images/anatomy/upper-limbs/wrist-pa-1.png`,
              `${BASE}images/anatomy/upper-limbs/wrist-pa-2.png`
            ],
            description: "WIP",
            cm: 4,
            kVp: 66,
            mAs: 2,
            sid: "40\""
          },
          {
            id: "wrist-lateral",
            name: "Wrist Lateral",
            images: [
              `${BASE}images/anatomy/upper-limbs/wrist-lateral-1.png`,
              `${BASE}images/anatomy/upper-limbs/wrist-lateral-2.png`
            ],
            description: "WIP",
            cm: 6,
            kVp: 70,
            mAs: 2.5,
            sid: "40\""
          }
        ]
      },
      {
        name: "Hand",
        items: [
          {
            id: "hand-pa",
            name: "Hand PA",
            images: [
              `${BASE}images/anatomy/upper-limbs/hand-pa-1.png`,
              `${BASE}images/anatomy/upper-limbs/hand-pa-2.png`
            ],
            description: "WIP",
            cm: 3,
            kVp: 66,
            mAs: 1.6,
            sid: "40\""
          },
          {
            id: "hand-lateral",
            name: "Hand Lateral",
            images: [
              `${BASE}images/anatomy/upper-limbs/hand-lateral-1.png`,
              `${BASE}images/anatomy/upper-limbs/hand-lateral-2.png`
            ],
            description: "WIP",
            cm: 7,
            kVp: 70,
            mAs: 2.5,
            sid: "40\""
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
            description: "WIP",
            cm: 22,
            kVp: 120,
            mAs: 2.8,
            sid: "72\""
          },
          {
            id: "chest-lateral",
            name: "Chest Lateral",
            images: [
              `${BASE}images/anatomy/chest/chest-lateral-1.png`,
              `${BASE}images/anatomy/chest/chest-lateral-2.png`
            ],
            description: "WIP",
            cm: 33,
            kVp: 120,
            mAs: 7.1,
            sid: "72\""
          }
        ]
      },
      {
        name: "Thoracic Vertebrae",
        items: [
          {
            id: "thoracic-spine-ap",
            name: "Thoracic Spine AP",
            images: [
              `${BASE}images/anatomy/chest/thoracic-spine-ap-1.png`,
              `${BASE}images/anatomy/chest/thoracic-spine-ap-2.png`
            ],
            description: "WIP",
            cm: 21,
            kVp: 90,
            mAs: 20,
            sid: "40\""
          }
        ]
      }
    ]
  },

  {
    id: "abdomen",
    name: "Abdomen - Lumbar Vertebrae",
    subcategories: [
      {
        name: "Abdomen",
        items: [
          {
            id: "direct-abdominal",
            name: "Direct Abdominal",
            images: [
              `${BASE}images/anatomy/abdomen/direct-abdominal-1.png`,
              `${BASE}images/anatomy/abdomen/direct-abdominal-2.png`
            ],
            description: "WIP",
            cm: 24,
            kVp: 85,
            mAs: 22,
            sid: "40\""
          },
          // {
          //   id: "direct-abdominal-upright",
          //   name: "Direct Abdominal (upright)",
          //   images: [
          //     `${BASE}images/anatomy/abdomen/direct-abdominal-upright-1.png`,
          //     `${BASE}images/anatomy/abdomen/direct-abdominal-upright-2.png`
          //   ],
          //   description: "WIP",
          //   cm: 21,
          //   kVp: 85,
          //   mAs: 25,
          //   sid: "40\""
          // }
        ]
      },
      {
        name: "Lumbosacral Spine",
        items: [
          {
            id: "lumbar-spine-ap",
            name: "Lumbar Spine AP",
            images: [
              `${BASE}images/anatomy/abdomen/lumbar-spine-ap-1.png`,
              `${BASE}images/anatomy/abdomen/lumbar-spine-ap-2.png`
            ],
            description: "WIP",
            cm: 21,
            kVp: 90,
            mAs: 20,
            sid: "40\""
          }
        ]
      }
    ]
  },

  {
    id: "pelvis",
    name: "Pelvis - Sacrum - Coccyx",
    subcategories: [
      {
        name: "Pelvis",
        items: [
          {
            id: "pelvis-ap",
            name: "Pelvis AP",
            images: [
              `${BASE}images/anatomy/pelvis/pelvis-ap-1.png`,
              `${BASE}images/anatomy/pelvis/pelvis-ap-2.png`
            ],
            description: "WIP",
            cm: 19,
            kVp: 85,
            mAs: 25,
            sid: "40\""
          }
        ]
      }
    ]
  },

  {
    id: "lower-limbs",
    name: "Lower Limbs",
    subcategories: [
      {
        name: "Femur",
        items: [
          {
            id: "femur-ap",
            name: "Femur AP",
            images: [
              `${BASE}images/anatomy/lower-limbs/femur-ap-1.png`,
              `${BASE}images/anatomy/lower-limbs/femur-ap-2.png`
            ],
            description: "WIP",
            cm: 19,
            kVp: 87.5,
            mAs: 14,
            sid: "40\""
          },
          {
            id: "femur-lateral",
            name: "Femur Lateral",
            images: [
              `${BASE}images/anatomy/lower-limbs/femur-lateral-1.png`,
              `${BASE}images/anatomy/lower-limbs/femur-lateral-2.png`
            ],
            description: "WIP",
            cm: 19,
            kVp: 87.5,
            mAs: 14,
            sid: "40\""
          }
        ]
      },
      {
        name: "Knee",
        items: [
          {
            id: "knee-ap",
            name: "Knee AP",
            images: [
              `${BASE}images/anatomy/lower-limbs/knee-ap-1.png`,
              `${BASE}images/anatomy/lower-limbs/knee-ap-2.png`
            ],
            description: "WIP",
            cm: 13,
            kVp: 70,
            mAs: 5,
            sid: "40\""
          },
          {
            id: "knee-lateral",
            name: "Knee Lateral",
            images: [
              `${BASE}images/anatomy/lower-limbs/knee-lateral-1.png`,
              `${BASE}images/anatomy/lower-limbs/knee-lateral-2.png`
            ],
            description: "WIP",
            cm: 13,
            kVp: 70,
            mAs: 5,
            sid: "40\""
          }
        ]
      }
      // (rest of lower limbs follows same pattern)
    ]
  }
];