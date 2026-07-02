import anatomy1 from "/images/anatomy/skull/skull-pa-1.png";
import anatomy2 from "/images/anatomy/skull/skull-pa-2.png";


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
            images: ["/images/anatomy/skull/skull-pa-1.png","/images/anatomy/skull/skull-pa-2.png"],
            description: "It falls perpendicular to the plane of support, in the Inion and emerges in the Nasion.",
            lighting:
              "It falls perpendicular to the plane of support, in the Inion and emerges in the Nasion.",
            ir: "10x12 in",
            orientation: "portrait",
            position: "It can be in a supine position, sitting, or standing. The sagittal median plane is perpendicular and coincident with the midline of the table, the orbital meatus plane is perpendicular to the support plane, to achieve these parameters, the patient is asked to rest the forehead and nose on the midline of the table.",
            qa: `- Complete visualization of the cranial shell.
            - Identification of the patient's right.
            - Crags occupying the lower 2/3 of the orbit.
            - Equidistance between the innominate-cranial shell line on both sides.`,
            sid: "40 in"
          },
          {
            id: "skull-ap",
            name: "Skull AP",
            images: ["/images/anatomy/skull/skull-ap-1.png","/images/anatomy/skull/skull-ap-2.png"],
            description:
              "Shows the entire skull in lateral projection including cranial sutures and mandible."
          },
          {
            id: "skull-lateral",
            name: "Skull Lateral",
            images: ["/images/anatomy/skull/skull-lateral-1.png","/images/anatomy/skull/skull-lateral-2.png"],
            lighting: "The cross influences the nasion. It falls perpendicular to the support plane, longitudinal beam coinciding with the sagittal median plane, and the transverse beam coinciding with the orbital meatus plane. The transverse beam passes through the external ear canals. The ray emerges in the inion.",
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
            images: ["/images/anatomy/upper-limbs/shoulder-ap-1.png","/images/anatomy/upper-limbs/shoulder-ap-2.png"],
            description:
              "WIP"
          },
        ],
      },
      {
        name: "Elbow",
        items: [
        {
          id: "elbow-ap",
          name: "Elbow AP",
          images: ["/images/anatomy/upper-limbs/elbow-ap-1.png","/images/anatomy/upper-limbs/elbow-ap-2.png"],
          description:
          "WIP"
        },
        {
          id: "elbow-oblique",
          name: "Elbow Oblique",
          images: ["/images/anatomy/upper-limbs/elbow-oblique-1.png","/images/anatomy/upper-limbs/elbow-oblique-2.png"],
          description:
          "WIP"
        },
        ]
      },
      {
        name: "Forearm",
        items: [
        {
          id: "forearm-ap",
          name: "Forearm AP",
          images: ["/images/anatomy/upper-limbs/forearm-ap-1.png","/images/anatomy/upper-limbs/forearm-ap-2.png"],
          description:
          "WIP"
        },
        {
          id: "forearm-lateral",
          name: "Forearm Lateral",
          images: ["/images/anatomy/upper-limbs/forearm-lateral-1.png","/images/anatomy/upper-limbs/forearm-lateral-2.png"],
          description:
          "WIP"
        },
        ]
      },
      {
        name: "Wrist",
        items: [
      {
        id: "wrist-pa",
        name: "Wrist PA",
        images: ["/images/anatomy/upper-limbs/wrist-pa-1.png","/images/anatomy/upper-limbs/wrist-pa-2.png"],
        description:
        "WIP"
      },
      {
        id: "wrist-lateral",
        name: "Wrist Lateral",
        images: ["/images/anatomy/upper-limbs/wrist-lateral-1.png","/images/anatomy/upper-limbs/wrist-lateral-2.png"],
        description:
        "WIP"
      },
        ]
      },
      {
        name: "Hand",
        items: [
      {
        id: "hand-pa",
        name: "Hand PA",
        images: ["/images/anatomy/upper-limbs/hand-pa-1.png","/images/anatomy/upper-limbs/hand-pa-2.png"],
        description:
        "WIP"
      },
      {
        id: "hand-lateral",
        name: "Hand Lateral",
        images: ["/images/anatomy/upper-limbs/hand-lateral-1.png","/images/anatomy/upper-limbs/hand-lateral-2.png"],
        description:
        "WIP"
      },
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
            images: ["/images/anatomy/chest/chest-pa-1.png","/images/anatomy/chest/chest-pa-2.png"],
            description:
              "WIP"
          },
          {
            id: "chest-lateral",
            name: "Chest Lateral",
            images: ["/images/anatomy/chest/chest-lateral-1.png","/images/anatomy/chest/chest-lateral-2.png"],
            description:
              "WIP"
          },
        ]
      },
      {
        name: "Thoracic Vertebrae",
        items: [
          {
            id: "thoracic-spine-ap",
            name: "Thoracic Spine AP",
            images: ["/images/anatomy/chest/thoracic-spine-ap-1.png","/images/anatomy/chest/thoracic-spine-ap-2.png"],
            description:
              "WIP"
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
          id: "direct-abdominal-decubitus",
          name: "Direct Abdominal (decubitus position)",
          images: ["/images/anatomy/abdomen/direct-abdominal-decubitus-1.png","/images/anatomy/abdomen/direct-abdominal-decubitus-2.png"],
          description:
            "WIP"
        },
        {
          id: "direct-abdominal-upright",
          name: "Direct Abdominal (upright)",
          images: ["/images/anatomy/abdomen/direct-abdominal-upright-1.png","/images/anatomy/abdomen/direct-abdominal-upright-2.png"],
          description:
            "WIP"
        },
        ]
      },
      {
        name: "Lumbosacral Spine",
        items: [
          {
            id: "lumbar-spine-ap",
            name: "Lumbar Spine AP",
            images: ["/images/anatomy/abdomen/lumbar-spine-ap-1.png","/images/anatomy/abdomen/lumbar-spine-ap-2.png"],
            description:
              "WIP"
          },
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
            images: ["/images/anatomy/pelvis/pelvis-ap-1.png","/images/anatomy/pelvis/pelvis-ap-1.png"],
            description:
              "WIP"
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
            images: ["/images/anatomy/lower-limbs/femur-ap-1.png","/images/anatomy/lower-limbs/femur-ap-2.png"],
            description:
              "WIP"
          },
          {
            id: "femur-lateral",
            name: "Femur Lateral",
            images: ["/images/anatomy/lower-limbs/femur-lateral-1.png","/images/anatomy/lower-limbs/femur-lateral-2.png"],
            description:
              "WIP"
          },
        ]
      },
      {
        name: "Knee",
        items: [
          {
            id: "knee-ap",
            name: "Knee AP",
            images: ["/images/anatomy/lower-limbs/knee-ap-1.png","/images/anatomy/lower-limbs/knee-ap-2.png"],
            description:
              "WIP"
          },
          {
            id: "knee-lateral",
            name: "Knee Lateral",
            images: ["/images/anatomy/lower-limbs/knee-lateral-1.png","/images/anatomy/lower-limbs/knee-lateral-2.png"],
            description:
              "WIP"
          },
        ]
      },
      {
        name: "Patella",
        items: [
          {
            id: "patella-pa",
            name: "Patella PA",
            images: ["/images/anatomy/lower-limbs/patella-pa-1.png","/images/anatomy/lower-limbs/patella-pa-2.png"],
            description:
              "WIP"
          },
        ]
      },
      {
        name: "Leg",
        items: [
          {
            id: "leg-ap",
            name: "Leg AP",
            images: ["/images/anatomy/lower-limbs/leg-ap-1.png","/images/anatomy/lower-limbs/leg-ap-2.png"],
            description:
              "WIP"
          },
          {
            id: "leg-lateral",
            name: "Leg Lateral",
            images: ["/images/anatomy/lower-limbs/leg-lateral-1.png","/images/anatomy/lower-limbs/leg-lateral-2.png"],
            description:
              "WIP"
          },
        ]
      },
      {
        name: "Ankle",
        items: [
          {
            id: "ankle-ap",
            name: "Ankle AP",
            images: ["/images/anatomy/lower-limbs/ankle-ap-1.png","/images/anatomy/lower-limbs/ankle-ap-2.png"],
            description:
              "WIP"
          },
          {
            id: "ankle-lateral",
            name: "Ankle Lateral",
            images: ["/images/anatomy/lower-limbs/ankle-lateral-1.png","/images/anatomy/lower-limbs/ankle-lateral-2.png"],
            description:
              "WIP"
          },
        ]
      },
      {
        name: "Foot",
        items: [
          {
            id: "foot-ap",
            name: "Foot AP",
            images: ["/images/anatomy/lower-limbs/foot-ap-1.png","/images/anatomy/lower-limbs/foot-ap-2.png"],
            description:
              "WIP"
          },
          {
            id: "foot-lateral",
            name: "Foot Lateral",
            images: ["/images/anatomy/lower-limbs/foot-lateral-1.png","/images/anatomy/lower-limbs/foot-lateral-2.png"],
            description:
              "WIP"
          },
        ]
      }
    ]
  },
];