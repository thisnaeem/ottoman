// data/sultans.ts

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

export const SULTANS = [
  {
    "id": 1,
    "name": "Osman I",
    "reign": "1299-1323",
    "title": "Founder of the Ottoman Empire",
    "image": "/images/sultans/osman1.jpg",
    "period": "Rise of Ottoman Empire",
    "periodId": "rise",
    "achievements": [
      "Established the Ottoman State",
      "Conquered several Byzantine fortresses",
      "Created the foundation of Ottoman military system",
      "Established the first Ottoman coins"
    ],
    "biography": "Osman I was the leader of the Ottoman Turks and the founder of the Ottoman dynasty. The Ottoman Empire that he founded was one of the largest and longest-lasting empires in history.",
    "battles": ["Siege of Nicaea", "Battle of Bapheus"],
    "territories": ["Parts of Byzantine Anatolia", "Söğüt", "Bursa region"],
    "legacy": "Known as the father of the Ottoman Empire",
    "familyRelations": "Son of Ertuğrul",
    "culturalDevelopments": ["Established first Ottoman administrative system", "Created tribal alliances"],
    "capitalCity": "Söğüt"
  },
  {
    "id": 2,
    "name": "Orhan",
    "reign": "1326-1362",
    "title": "Consolidator of Ottoman Power",
    "image": "/images/sultans/orhan.jpg",
    "period": "Rise of Ottoman Empire",
    "periodId": "rise",
    "achievements": [
      "Captured Bursa, making it the first Ottoman capital",
      "Established the first Ottoman legal and administrative systems",
      "Organized a standing army, including the Janissaries"
    ],
    "biography": "Orhan was the second Ottoman sultan and expanded his father’s initial conquests, establishing a structured state system and solidifying Ottoman rule in northwest Anatolia.",
    "battles": ["Battle of Pelekanon"],
    "territories": ["Bursa", "Iznik (Nicaea)", "Thrace"],
    "legacy": "Organized the first Ottoman administrative and military systems",
    "familyRelations": "Son of Osman I",
    "culturalDevelopments": ["Founded the first Ottoman mosque in Bursa", "Encouraged architectural development"],
    "capitalCity": "Bursa"
  },
  {
    "id": 3,
    "name": "Murad I",
    "reign": "1362-1389",
    "title": "Conqueror of the Balkans",
    "image": "/images/sultans/murad1.jpg",
    "period": "Expansion of Ottoman Empire",
    "periodId": "expansion",
    "achievements": [
      "Expanded into the Balkans",
      "Established the Janissary corps",
      "Won the Battle of Kosovo"
    ],
    "biography": "Murad I expanded Ottoman territories significantly into the Balkans, establishing Ottoman control in Europe and laying the foundation for further conquests.",
    "battles": ["Battle of Maritsa", "Battle of Kosovo"],
    "territories": ["Balkans", "Serbia", "Thessaloniki"],
    "legacy": "Pioneered Ottoman expansion in Europe and established elite Janissary troops",
    "familyRelations": "Son of Orhan",
    "culturalDevelopments": ["Supported Islamic scholarship", "Founded institutions in newly conquered areas"],
    "capitalCity": "Edirne"
  },
  {
    "id": 4,
    "name": "Bayezid I",
    "reign": "1389-1402",
    "title": "The Thunderbolt",
    "image": "/images/sultans/bayezid1.jpg",
    "period": "Expansion of Ottoman Empire",
    "periodId": "expansion",
    "achievements": [
      "Expanded Ottoman territory in Anatolia and the Balkans",
      "Laid siege to Constantinople",
      "Faced and was defeated by Timur at the Battle of Ankara"
    ],
    "biography": "Bayezid I, known as 'The Thunderbolt' for his quick military campaigns, aggressively expanded the Ottoman Empire but suffered a major defeat by Timur, resulting in his capture and a temporary fragmentation of Ottoman lands.",
    "battles": ["Battle of Ankara", "Siege of Constantinople"],
    "territories": ["Anatolia", "Balkans", "Western Thrace"],
    "legacy": "Known for rapid conquests and his failed siege of Constantinople",
    "familyRelations": "Son of Murad I",
    "culturalDevelopments": ["Supported early Ottoman architectural developments"],
    "capitalCity": "Edirne"
  },
  {
    "id": 5,
    "name": "Mehmed I",
    "reign": "1413-1421",
    "title": "The Restorer",
    "image": "/images/sultans/mehmed1.jpg",
    "period": "Interregnum and Restoration",
    "periodId": "restoration",
    "achievements": [
      "Reunified the Ottoman Empire after the civil war following Bayezid I's defeat",
      "Strengthened the administrative and military structures",
      "Encouraged arts and religious scholarship"
    ],
    "biography": "Mehmed I restored the Ottoman Empire’s unity after a period of civil strife and interregnum following the defeat of his father Bayezid I by Timur.",
    "battles": ["Battle of Çamurlu"],
    "territories": ["Restored control over Ottoman Anatolia and Balkans"],
    "legacy": "Reunified the Ottoman Empire and restored its stability",
    "familyRelations": "Son of Bayezid I",
    "culturalDevelopments": ["Patronized Islamic scholarship and architecture"],
    "capitalCity": "Edirne"
  },
  {
    "id": 6,
    "name": "Murad II",
    "reign": "1421-1444, 1446-1451",
    "title": "The Warrior Sultan",
    "image": "/images/sultans/murad2.jpg",
    "period": "Expansion and Consolidation",
    "periodId": "consolidation",
    "achievements": [
      "Consolidated Ottoman control in the Balkans",
      "Fought the Crusader forces in the Balkans",
      "Temporarily abdicated in favor of his son Mehmed II"
    ],
    "biography": "Murad II expanded Ottoman rule over the Balkans, repelling Crusader forces in multiple battles and later abdicated briefly in favor of his son, Mehmed II.",
    "battles": ["Battle of Varna", "Second Battle of Kosovo"],
    "territories": ["Hungary", "Albania", "Eastern Europe"],
    "legacy": "Expanded Ottoman influence in the Balkans and strengthened military power",
    "familyRelations": "Son of Mehmed I",
    "culturalDevelopments": ["Patron of Turkish poetry and literature"],
    "capitalCity": "Edirne"
  },
  {
    "id": 7,
    "name": "Mehmed II",
    "reign": "1451-1481",
    "title": "The Conqueror",
    "image": "/images/sultans/mehmed2.jpg",
    "period": "Golden Age of Ottoman Empire",
    "periodId": "golden-age",
    "achievements": [
      "Conquered Constantinople (1453), ending Byzantine Empire",
      "Expanded Ottoman Empire into Europe and Anatolia",
      "Established Istanbul as the Ottoman capital"
    ],
    "biography": "Mehmed II, known as 'The Conqueror,' captured Constantinople and transformed it into the Ottoman capital, significantly expanding Ottoman influence and establishing the empire as a major power.",
    "battles": ["Siege of Constantinople", "Battle of Belgrade"],
    "territories": ["Constantinople", "Morea", "Black Sea territories"],
    "legacy": "Renowned as the architect of Istanbul and the conqueror of Constantinople",
    "familyRelations": "Son of Murad II",
    "culturalDevelopments": ["Established Islamic and Byzantine architectural fusion", "Patron of arts and sciences"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 8,
    "name": "Bayezid II",
    "reign": "1481-1512",
    "title": "The Just",
    "image": "/api/placeholder/120/160",
    "period": "Consolidation of Ottoman Empire",
    "periodId": "consolidation",
    "achievements": [
      "Strengthened Ottoman administration and economy",
      "Welcomed expelled Jews from Spain to the empire",
      "Commissioned significant architectural projects"
    ],
    "biography": "Bayezid II focused on internal stability, administrative reforms, and religious tolerance, notably offering refuge to Jews expelled from Spain in 1492.",
    "battles": ["Battle of Lepanto (minor)", "Suppressed revolts in Anatolia"],
    "territories": ["Balkans", "Anatolia"],
    "legacy": "Known for internal consolidation and policies of tolerance",
    "familyRelations": "Son of Mehmed II",
    "culturalDevelopments": ["Promoted Ottoman architecture and arts", "Sponsored religious scholarship"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 9,
    "name": "Selim I",
    "reign": "1512-1520",
    "title": "The Grim",
    "image": "/api/placeholder/120/160",
    "period": "Expansion of Ottoman Empire",
    "periodId": "expansion",
    "achievements": [
      "Conquered Egypt, Hejaz, and Levant",
      "Took control of the Holy Cities of Mecca and Medina",
      "Expanded Ottoman influence in the Muslim world"
    ],
    "biography": "Selim I expanded the Ottoman Empire significantly into the Middle East, defeating the Mamluks and securing the title of Caliph for the Ottoman Sultan.",
    "battles": ["Battle of Chaldiran", "Battle of Marj Dabiq"],
    "territories": ["Egypt", "Syria", "Hejaz"],
    "legacy": "Unified much of the Muslim world under Ottoman rule",
    "familyRelations": "Son of Bayezid II",
    "culturalDevelopments": ["Promoted the arts", "Contributed to Islamic scholarship"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 10,
    "name": "Suleiman the Magnificent",
    "reign": "1520-1566",
    "title": "The Lawgiver",
    "image": "/api/placeholder/120/160",
    "period": "Golden Age of Ottoman Empire",
    "periodId": "golden-age",
    "achievements": [
      "Expanded Ottoman Empire to its peak territory in Europe and Middle East",
      "Implemented extensive legal reforms",
      "Encouraged a flourishing of arts, architecture, and culture"
    ],
    "biography": "Suleiman the Magnificent is celebrated for his military conquests, legal reforms, and for ushering in a golden age of arts and architecture.",
    "battles": ["Siege of Vienna", "Battle of Mohács"],
    "territories": ["Hungary", "North Africa", "Persian Gulf"],
    "legacy": "Known as the greatest Ottoman ruler for military, legal, and cultural achievements",
    "familyRelations": "Son of Selim I",
    "culturalDevelopments": ["Commissioned the Suleymaniye Mosque", "Patron of Ottoman poetry and arts"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 11,
    "name": "Selim II",
    "reign": "1566-1574",
    "title": "Selim the Sot",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Ottoman naval dominance continued in the Mediterranean",
      "Maintained stability within the empire",
      "Lost Battle of Lepanto, marking the start of naval decline"
    ],
    "biography": "Selim II’s reign saw a decline in direct sultanic involvement in governance, with power increasingly held by his viziers. He maintained the empire but faced setbacks at sea.",
    "battles": ["Battle of Lepanto"],
    "territories": ["Continued control of Mediterranean territories"],
    "legacy": "Marked the beginning of Ottoman naval decline",
    "familyRelations": "Son of Suleiman the Magnificent",
    "culturalDevelopments": ["Supported Ottoman architecture", "Preserved arts patronage"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 12,
    "name": "Murad III",
    "reign": "1574-1595",
    "title": "The Luxurious Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Expanded Ottoman influence in Iran and the Caucasus",
      "Strengthened trade relations",
      "Oversaw the decline of Ottoman military discipline"
    ],
    "biography": "Murad III’s rule was marked by internal corruption and conflicts with Persia, but he managed to expand Ottoman influence eastward and maintain strong trade relations.",
    "battles": ["Ottoman-Safavid War (1578–1590)"],
    "territories": ["Caucasus", "Northern Persia"],
    "legacy": "Noted for internal challenges and lavish spending",
    "familyRelations": "Son of Selim II",
    "culturalDevelopments": ["Promoted Ottoman poetry", "Supported miniature painting and arts"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 13,
    "name": "Mehmed III",
    "reign": "1595-1603",
    "title": "The Cautious Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Successfully defended Ottoman territories from European encroachment",
      "Won the Long Turkish War against Habsburgs",
      "Maintained control in the face of European coalitions"
    ],
    "biography": "Mehmed III maintained Ottoman territorial integrity despite European advances. His reign was also marked by challenges to the centralized power of the sultanate.",
    "battles": ["Battle of Keresztes"],
    "territories": ["Hungary", "Austria"],
    "legacy": "Known for careful governance and defending Ottoman borders",
    "familyRelations": "Son of Murad III",
    "culturalDevelopments": ["Supported poetry", "Maintained religious scholarship"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 14,
    "name": "Ahmed I",
    "reign": "1603-1617",
    "title": "The Builder of the Blue Mosque",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Constructed the famous Blue Mosque in Istanbul",
      "Attempted to stabilize the empire amid economic difficulties"
    ],
    "biography": "Ahmed I is known for his significant architectural contributions, notably the Blue Mosque, and for ruling during a period of relative peace with Europe.",
    "battles": ["Peace Treaty with Persia (1612)"],
    "territories": ["Centralized rule in Anatolia and Balkans"],
    "legacy": "Known for his contributions to Ottoman architecture",
    "familyRelations": "Son of Mehmed III",
    "culturalDevelopments": ["Built the Blue Mosque", "Promoted Ottoman poetry and calligraphy"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 15,
    "name": "Mustafa I",
    "reign": "1617-1618, 1622-1623",
    "title": "The Mad Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Known for instability and mental health struggles",
      "Briefly dethroned and reinstalled due to palace politics"
    ],
    "biography": "Mustafa I faced severe mental health issues and was installed and removed from the throne twice due to political instability and palace intrigue.",
    "battles": [],
    "territories": [],
    "legacy": "Remembered for a tumultuous reign marked by instability",
    "familyRelations": "Son of Mehmed III",
    "culturalDevelopments": [],
    "capitalCity": "Istanbul"
  },
  {
    "id": 16,
    "name": "Osman II",
    "reign": "1618-1622",
    "title": "The Young Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Attempted to reform the Janissaries",
      "Undertook military campaign in Poland",
      "Executed due to Janissary rebellion"
    ],
    "biography": "Osman II, known for his attempts to reform the Janissary corps and his military campaign in Poland, faced resistance from within, leading to his overthrow and execution.",
    "battles": ["Polish-Ottoman War (1620-1621)"],
    "territories": ["Maintained territories in Eastern Europe"],
    "legacy": "Attempted military reforms but was executed after a Janissary rebellion",
    "familyRelations": "Son of Ahmed I",
    "culturalDevelopments": [],
    "capitalCity": "Istanbul"
  },
  {
    "id": 17,
    "name": "Murad IV",
    "reign": "1623-1640",
    "title": "The Restorer",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Reasserted control over a turbulent empire",
      "Imposed strict laws to curb corruption and decadence",
      "Successfully conquered Baghdad"
    ],
    "biography": "Murad IV is remembered for his harsh but effective rule, restoring stability by implementing strict reforms, suppressing corruption, and reconquering Baghdad.",
    "battles": ["Recapture of Baghdad"],
    "territories": ["Mesopotamia", "Persian territories"],
    "legacy": "Brought stability to the empire through strict rule and military successes",
    "familyRelations": "Son of Ahmed I",
    "culturalDevelopments": ["Restored order and discipline"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 18,
    "name": "Ibrahim I",
    "reign": "1640-1648",
    "title": "The Mad",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Oversaw temporary peace with neighboring powers",
      "Known for extravagant spending and instability"
    ],
    "biography": "Ibrahim I was known for his erratic behavior, which led to his deposition. His reign was marked by palace intrigues and economic instability.",
    "battles": [],
    "territories": [],
    "legacy": "Remembered for his mental instability and extravagant rule",
    "familyRelations": "Son of Ahmed I",
    "culturalDevelopments": ["Patronized various luxurious projects"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 19,
    "name": "Mehmed IV",
    "reign": "1648-1687",
    "title": "The Hunter",
    "image": "/api/placeholder/120/160",
    "period": "Stagnation of Ottoman Empire",
    "periodId": "stagnation",
    "achievements": [
      "Sultan during the Ottoman Empire’s stagnation period",
      "Lost control over key territories in Hungary",
      "Oversaw the Battle of Vienna"
    ],
    "biography": "Mehmed IV's reign saw the start of Ottoman stagnation, marked by military defeats in Europe, including the failed siege of Vienna, which symbolized the end of Ottoman expansion.",
    "battles": ["Battle of Vienna (1683)"],
    "territories": ["Hungary", "Austria"],
    "legacy": "Associated with the stagnation period and failed Vienna siege",
    "familyRelations": "Son of Ibrahim I",
    "culturalDevelopments": ["Continued architectural patronage"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 20,
    "name": "Suleiman II",
    "reign": "1687-1691",
    "title": "The Inactive Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Stagnation of Ottoman Empire",
    "periodId": "stagnation",
    "achievements": [
      "Focused on internal administrative reforms",
      "Faced military losses in Europe"
    ],
    "biography": "Suleiman II inherited an empire in decline and attempted internal reforms but saw military setbacks in the Balkans.",
    "battles": ["War of the Holy League"],
    "territories": ["Maintained shrinking Balkan territories"],
    "legacy": "Known for administrative reforms during a difficult period",
    "familyRelations": "Son of Ibrahim I",
    "culturalDevelopments": ["Encouraged state reorganization"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 21,
    "name": "Ahmed II",
    "reign": "1691-1695",
    "title": "The Short-Lived Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Stagnation of Ottoman Empire",
    "periodId": "stagnation",
    "achievements": [
      "Focused on military fortifications",
      "Failed to reverse Ottoman losses in Europe"
    ],
    "biography": "Ahmed II's brief reign was marked by efforts to improve the empire's military defenses but saw continued setbacks against European powers.",
    "battles": ["Battle of Slankamen"],
    "territories": ["Balkan regions under threat"],
    "legacy": "Noted for military focus but little territorial gains",
    "familyRelations": "Son of Ibrahim I",
    "culturalDevelopments": ["Commissioned fortress constructions"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 22,
    "name": "Mustafa II",
    "reign": "1695-1703",
    "title": "The Military Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Stagnation of Ottoman Empire",
    "periodId": "stagnation",
    "achievements": [
      "Led multiple campaigns against Austria and Russia",
      "Lost significant territories in the Treaty of Karlowitz"
    ],
    "biography": "Mustafa II actively pursued military campaigns to reclaim Ottoman territory but ultimately lost major lands in the Treaty of Karlowitz.",
    "battles": ["War with Austria and Russia"],
    "territories": ["Hungary", "Balkan territories lost"],
    "legacy": "Saw the empire’s first major territorial concessions",
    "familyRelations": "Son of Mehmed IV",
    "culturalDevelopments": [],
    "capitalCity": "Istanbul"
  },
  {
    "id": 23,
    "name": "Ahmed III",
    "reign": "1703-1730",
    "title": "The Tulip Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Tulip Era of Ottoman Empire",
    "periodId": "tulip-era",
    "achievements": [
      "Initiated the Tulip Era, a period of cultural and artistic flourishing",
      "Signed the Treaty of Passarowitz, ending wars with Austria and Venice",
      "Established the first Ottoman printing press"
    ],
    "biography": "Ahmed III's rule marked the Tulip Era, a time of peace, cultural growth, and European influence in the Ottoman Empire. His reign ended in a revolt led by the Janissaries.",
    "battles": ["Ottoman-Venetian War", "Russo-Turkish War"],
    "territories": ["Maintained Ottoman borders through diplomacy"],
    "legacy": "Remembered for the Tulip Era’s cultural and artistic achievements",
    "familyRelations": "Son of Mehmed IV",
    "culturalDevelopments": ["Initiated Tulip Era art and literature", "Introduced European influences"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 24,
    "name": "Mahmud I",
    "reign": "1730-1754",
    "title": "The Rebuilder",
    "image": "/api/placeholder/120/160",
    "period": "Period of Ottoman Reforms",
    "periodId": "reforms",
    "achievements": [
      "Suppressed the Janissary revolt",
      "Focused on rebuilding the empire’s finances and military",
      "Won key battles in the Russo-Turkish War"
    ],
    "biography": "Mahmud I strengthened the empire’s military and administration, restoring stability after the Tulip Era's unrest and achieving victories against Persia and Russia.",
    "battles": ["Russo-Turkish War", "Ottoman-Persian War"],
    "territories": ["Defended territories in Europe and the Caucasus"],
    "legacy": "Restored Ottoman stability and advanced military discipline",
    "familyRelations": "Son of Mustafa II",
    "culturalDevelopments": ["Encouraged the arts and restoration of public works"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 25,
    "name": "Osman III",
    "reign": "1754-1757",
    "title": "The Reclusive Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Period of Ottoman Reforms",
    "periodId": "reforms",
    "achievements": [
      "Known for conservative domestic policies",
      "Maintained stability during brief reign"
    ],
    "biography": "Osman III preferred a quiet, reclusive lifestyle and ruled for only three years, focusing on internal stability rather than military expansion.",
    "battles": [],
    "territories": [],
    "legacy": "His reign was short and marked by stability",
    "familyRelations": "Son of Mustafa II",
    "culturalDevelopments": ["Preserved traditional Ottoman cultural practices"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 26,
    "name": "Mustafa III",
    "reign": "1757-1774",
    "title": "The Enlightened Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Period of Ottoman Reforms",
    "periodId": "reforms",
    "achievements": [
      "Initiated reforms in education and military",
      "Founded the Imperial School of Naval Engineering",
      "Faced military losses in the Russo-Turkish War"
    ],
    "biography": "Mustafa III, influenced by European enlightenment, sought to modernize the Ottoman military and administration but faced defeats in his wars with Russia.",
    "battles": ["Russo-Turkish War (1768-1774)"],
    "territories": ["Lost territories along the Black Sea"],
    "legacy": "Started military modernization, influencing future reforms",
    "familyRelations": "Son of Ahmed III",
    "culturalDevelopments": ["Promoted education and science", "Encouraged printing press use"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 27,
    "name": "Abdul Hamid I",
    "reign": "1774-1789",
    "title": "The Cautious Reformer",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Signed the Treaty of Küçük Kaynarca, ceding territory to Russia",
      "Continued military reforms initiated by his predecessors",
      "Sought European alliances to counter Russian influence"
    ],
    "biography": "Abdul Hamid I focused on military and financial reform, facing significant territorial losses to Russia but laying groundwork for further modernization.",
    "battles": ["Russo-Turkish War (1787-1792)"],
    "territories": ["Crimea, Black Sea regions"],
    "legacy": "Remembered for his reforms and challenges against Russian expansion",
    "familyRelations": "Son of Ahmed III",
    "culturalDevelopments": ["Strengthened military infrastructure"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 28,
    "name": "Selim III",
    "reign": "1789-1807",
    "title": "The Reformer",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Implemented the Nizam-i Cedid (New Order) military reforms",
      "Reorganized the army and introduced modern weaponry",
      "Faced opposition leading to his eventual deposition"
    ],
    "biography": "Selim III’s ambitious reform efforts aimed to modernize the Ottoman army and administration, but faced resistance from the Janissaries and conservative factions, leading to his downfall.",
    "battles": ["Defensive battles against Russia and Austria"],
    "territories": ["Maintained core Ottoman lands amid reforms"],
    "legacy": "Pioneered reforms that inspired future modernization",
    "familyRelations": "Son of Mustafa III",
    "culturalDevelopments": ["Encouraged Western-style education", "Supported the arts"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 29,
    "name": "Mahmud II",
    "reign": "1808-1839",
    "title": "The Reformer Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Period of Tanzimat Reforms",
    "periodId": "tanzimat",
    "achievements": [
      "Abolished the Janissary corps",
      "Launched the Tanzimat reforms, modernizing Ottoman governance",
      "Centralized the Ottoman administrative structure"
    ],
    "biography": "Mahmud II is credited with laying the foundation of modern Ottoman governance through the Tanzimat reforms, dismantling the Janissaries, and reorganizing the military.",
    "battles": ["Greek War of Independence"],
    "territories": ["Lost territories in the Balkans, Greece"],
    "legacy": "Began substantial reforms that shaped the modern Ottoman state",
    "familyRelations": "Son of Abdul Hamid I",
    "culturalDevelopments": ["Promoted Western-style education and architecture"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 30,
    "name": "Abdulmejid I",
    "reign": "1839-1861",
    "title": "The Modernizer",
    "image": "/api/placeholder/120/160",
    "period": "Tanzimat Era",
    "periodId": "tanzimat",
    "achievements": [
      "Issued the Edict of Gülhane, initiating the Tanzimat reforms",
      "Modernized the army, administration, and legal system",
      "Promoted equal rights for all subjects regardless of religion"
    ],
    "biography": "Abdulmejid I expanded on Mahmud II’s Tanzimat reforms, modernizing the legal and educational systems and promoting equality among his subjects.",
    "battles": ["Crimean War"],
    "territories": ["Maintained Ottoman territories with European alliances"],
    "legacy": "Credited with significant modernization of the Ottoman Empire",
    "familyRelations": "Son of Mahmud II",
    "culturalDevelopments": ["Built the Dolmabahçe Palace", "Encouraged arts and sciences"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 31,
    "name": "Abdulaziz",
    "reign": "1861-1876",
    "title": "The Progressive Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Tanzimat Era",
    "periodId": "tanzimat",
    "achievements": [
      "Established Ottoman financial and education reforms",
      "Introduced the first Ottoman railways and telegraph system",
      "Visited Europe to improve diplomatic relations"
    ],
    "biography": "Abdulaziz promoted modernization and expanded the Tanzimat reforms. He strengthened ties with Europe and initiated key infrastructural projects, but faced mounting debt and economic troubles.",
    "battles": ["Montenegrin-Ottoman War"],
    "territories": ["Maintained most of the Ottoman territories"],
    "legacy": "Pioneered modernization but faced financial struggles",
    "familyRelations": "Son of Mahmud II",
    "culturalDevelopments": ["Established cultural and educational institutions"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 32,
    "name": "Murad V",
    "reign": "1876",
    "title": "The Brief Reformer",
    "image": "/api/placeholder/120/160",
    "period": "Late Tanzimat Period",
    "periodId": "late-tanzimat",
    "achievements": [
      "Briefly supported liberal reforms and constitutional ideas",
      "Deposed due to mental health concerns"
    ],
    "biography": "Murad V ruled for only 93 days before he was deposed due to mental instability. He was a supporter of the Young Ottoman movement and progressive ideas.",
    "battles": [],
    "territories": [],
    "legacy": "Known for his brief reign and liberal ideas",
    "familyRelations": "Son of Abdulaziz",
    "culturalDevelopments": ["Influenced by European liberal thought"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 33,
    "name": "Abdulhamid II",
    "reign": "1876-1909",
    "title": "The Red Sultan",
    "image": "/api/placeholder/120/160",
    "period": "Decline of Ottoman Empire",
    "periodId": "decline",
    "achievements": [
      "Implemented an authoritarian regime to consolidate power",
      "Promoted Pan-Islamism to strengthen Muslim unity",
      "Built extensive railway networks including the Hejaz Railway"
    ],
    "biography": "Abdulhamid II ruled with an iron hand, emphasizing centralization and conservative policies. Known for suspending the constitution, he maintained control through censorship and surveillance, though he modernized infrastructure.",
    "battles": ["Russo-Turkish War (1877-1878)"],
    "territories": ["Lost parts of the Balkans and Cyprus"],
    "legacy": "His rule saw territorial losses but advancements in infrastructure",
    "familyRelations": "Son of Abdulmejid I",
    "culturalDevelopments": ["Supported Islamic architecture and Ottoman identity"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 34,
    "name": "Mehmed V",
    "reign": "1909-1918",
    "title": "The Symbolic Sultan",
    "image": "/api/placeholder/120/160",
    "period": "World War I",
    "periodId": "world-war-i",
    "achievements": [
      "Primarily a ceremonial ruler under the control of the Young Turks",
      "Declared Jihad against Allied powers during WWI",
      "Oversaw Ottoman involvement in World War I"
    ],
    "biography": "Mehmed V’s rule was largely symbolic, as the Young Turk government controlled the empire. Under his reign, the Ottoman Empire entered WWI, ultimately leading to severe losses and territorial disintegration.",
    "battles": ["World War I (1914-1918)"],
    "territories": ["Lost territories in the Middle East and Balkans"],
    "legacy": "The empire suffered great territorial losses in WWI",
    "familyRelations": "Son of Abdulmejid I",
    "culturalDevelopments": ["Promoted Ottoman patriotism during wartime"],
    "capitalCity": "Istanbul"
  },
  {
    "id": 35,
    "name": "Mehmed VI",
    "reign": "1918-1922",
    "title": "The Last Sultan",
    "image": "/api/placeholder/120/160",
    "period": "End of Ottoman Empire",
    "periodId": "end",
    "achievements": [
      "Oversaw the dissolution of the Ottoman Empire after WWI",
      "Signed the Treaty of Sèvres, ceding significant territories",
      "Deposed and went into exile after the abolition of the sultanate"
    ],
    "biography": "Mehmed VI witnessed the final days of the Ottoman Empire. His rule ended with the empire's defeat in WWI and the rise of Mustafa Kemal Atatürk’s movement, which led to the abolition of the sultanate.",
    "battles": ["No major battles, post-WWI occupation"],
    "territories": ["Lost all non-Turkish territories"],
    "legacy": "Last Sultan of the Ottoman Empire, ending a 600-year dynasty",
    "familyRelations": "Son of Abdulmejid I",
    "culturalDevelopments": ["Attempted diplomatic preservation of the empire"],
    "capitalCity": "Istanbul"
  }
];

export type Sultan = typeof SULTANS[0];
export type Period = typeof PERIODS[0];