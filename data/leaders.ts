export const PERIODS = [
  { id: 'all', name: 'All Periods' },
  { id: 'kayi', name: 'Kayı Tribe Period (pre-1299)' },
  { id: 'rise', name: 'Rise (1299-1453)' },
  { id: 'golden', name: 'Golden Age (1453-1566)' },
  { id: 'transformation', name: 'Transformation (1566-1703)' },
  { id: 'tulip', name: 'Tulip Period (1703-1757)' },
  { id: 'decline', name: 'Decline (1757-1876)' },
  { id: 'late', name: 'Late Period (1876-1922)' }
];

// Separate tribal leaders
export const TRIBAL_LEADERS = [
  {
    id: "TL1", // TL for Tribal Leader
    name: "Suleyman Shah",
    reign: "1178-1227",
    title: "Leader of the Kayı Tribe",
    image: "/images/tribal/shah.jpg",
    period: "Kayı Tribe Period",
    periodId: "kayi",
    achievements: [
      "Led Kayı tribe during Mongol invasion",
      "Established Kayı settlement in Anatolia",
      "Formed alliances with Seljuk Empire",
      "Maintained tribal unity during migration"
    ],
    biography: "Suleyman Shah was the leader of the Kayı tribe of the Oghuz Turks. He led his people westward from Central Asia into Anatolia, fleeing the Mongol invasions. His leadership during this crucial migration period laid the foundation for what would eventually become the Ottoman Empire.",
    battles: [
      "Defense against Mongol advances",
      "Battles during Anatolia migration",
      "Struggles for settlement rights"
    ],
    territories: [
      "Merv region",
      "Areas along Euphrates",
      "Parts of eastern Anatolia"
    ],
    legacy: "Grandfather of Osman I and crucial ancestor of the Ottoman dynasty",
    familyRelations: "Father of Ertuğrul Gazi",
    culturalDevelopments: [
      "Preserved Turkish tribal traditions",
      "Maintained nomadic cultural heritage",
      "Established new settlement patterns"
    ],
    capitalCity: "Nomadic/Various Settlements",
    tribalPosition: "Chief of Kayı branch of Oghuz Turks",
    significance: "His migration to Anatolia set stage for Ottoman Empire",
    deathLocation: "Near Euphrates River (Türk Mezarı)",
    tribalAlliances: "Strong connections with Seljuk Sultanate"
  },
  {
    id: "TL2",
    name: "Ertuğrul Gazi",
    reign: "1230-1281",
    title: "Leader of the Kayı Tribe",
    image: "/images/tribal/ertugrul.jpg",
    period: "Kayı Tribe Period",
    periodId: "kayi",
    achievements: [
      "Established Kayı control in Söğüt region",
      "Served Seljuk Empire successfully",
      "Expanded tribal territory",
      "Built foundation for Ottoman state",
      "Secured Byzantine border regions"
    ],
    biography: "Ertuğrul Gazi was a vital figure in early Turkish history, leading the Kayı tribe to prominence in western Anatolia. His strategic alliance with the Seljuk Empire and successful management of border regions created the foundation for his son Osman I to establish the Ottoman Empire.",
    battles: [
      "Battle of Domaniç",
      "Defense of Seljuk borders",
      "Conflicts with Byzantines",
      "Victory at Mount Ermeni"
    ],
    territories: [
      "Söğüt",
      "Domaniç",
      "Parts of Byzantine border regions",
      "Areas granted by Seljuk Sultan"
    ],
    legacy: "Father of Ottoman Empire's founder and established tribal power base",
    familyRelations: "Son of Suleyman Shah, father of Osman I",
    culturalDevelopments: [
      "Blended Turkish and Islamic traditions",
      "Established settled lifestyle from nomadic roots",
      "Developed border warfare techniques",
      "Created administrative systems"
    ],
    capitalCity: "Söğüt",
    tribalPosition: "Commander of Seljuk border forces",
    significance: "Established foundation for Ottoman state",
    deathLocation: "Söğüt",
    tribalAlliances: "Strong alliance with Seljuk Empire"
  }
];