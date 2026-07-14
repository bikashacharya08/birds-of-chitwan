const allBirds = [
    // Waterfowl
    { english: "Lesser Whistling Duck", scientific: "Dendrocygna javanica", nepali: "सिल्सिले", family: "Waterfowl", details: "A nocturnal, gregarious duck known for its high-pitched whistling flight call." },
    { english: "Bar-headed Goose", scientific: "Anser indicus", nepali: "खोया हाँस", family: "Waterfowl", details: "Famed for migrating over the Himalayas at extreme altitudes, reaching up to 7,000m." },
    { english: "Greylag Goose", scientific: "Anser anser", nepali: "करम हाँस", family: "Waterfowl", details: "The large, wild ancestor of most domestic geese, often seen in wetlands." },
    { english: "Ruddy Shelduck", scientific: "Tadorna ferruginea", nepali: "चखेवा", family: "Waterfowl", details: "A distinctive orange-brown waterfowl often seen in pairs along rivers. Sacred in Buddhism." },
    { english: "Common Shelduck", scientific: "Tadorna tadorna", nepali: "सेतो चखेवा", family: "Waterfowl", details: "A striking black, white, and chestnut duck resembling a small goose." },
    { english: "Cotton Pygmy Goose", scientific: "Nettapus coromandelianus", nepali: "हरहँस", family: "Waterfowl", details: "One of the smallest waterfowl in the world, nesting in tree cavities near water." },
    { english: "Gadwall", scientific: "Mareca strepera", nepali: "फुङ्के हाँस", family: "Waterfowl", details: "A quietly colored dabbling duck common in shallow wetlands." },
    { english: "Eurasian Wigeon", scientific: "Mareca penelope", nepali: "सुइरोपुच्छ्रे हाँस", family: "Waterfowl", details: "Known for the male's chestnut head and distinctive whistling call." },
    { english: "Mallard", scientific: "Anas platyrhynchos", nepali: "हरियोटाउके हाँस", family: "Waterfowl", details: "The most familiar wild duck; males have glossy green heads." },
    { english: "Eastern Spot-billed Duck", scientific: "Anas zonorhyncha", nepali: "थोप्लेठुँडे हाँस", family: "Waterfowl", details: "A large dabbling duck with a distinct yellow spot on its black bill." },
    { english: "Northern Shoveler", scientific: "Spatula clypeata", nepali: "बेचे हाँस", family: "Waterfowl", details: "Easily identified by its large, spatula-shaped bill used for filter feeding." },
    { english: "Northern Pintail", scientific: "Anas acuta", nepali: "सुइरोपुच्छ्रे हाँस", family: "Waterfowl", details: "An elegant duck with a long, pointed tail and slender neck." },
    { english: "Garganey", scientific: "Spatula querquedula", nepali: "कर्करे हाँस", family: "Waterfowl", details: "A highly migratory dabbling duck with a prominent white eye stripe on the male." },
    { english: "Common Teal", scientific: "Anas crecca", nepali: "बिजुल हाँस", family: "Waterfowl", details: "A small, fast-flying duck that often forms tight flocks over water." },
    { english: "Red-crested Pochard", scientific: "Netta rufina", nepali: "सुनजुरे हाँस", family: "Waterfowl", details: "Males boast a striking, puffy orange-red head." },
    { english: "Common Pochard", scientific: "Aythya ferina", nepali: "खैरोटाउके हाँस", family: "Waterfowl", details: "A diving duck featuring a bright rusty-red head and grey back." },
    { english: "Ferruginous Duck", scientific: "Aythya nyroca", nepali: "खैरो हाँस", family: "Waterfowl", details: "A rich chestnut-colored diving duck with stark white eyes." },
    { english: "Tufted Duck", scientific: "Aythya fuligula", nepali: "कालो हाँस", family: "Waterfowl", details: "A distinctive diving duck with a long tuft of feathers on its head." },
    { english: "Goosander", scientific: "Mergus merganser", nepali: "सुइरोठुँडे हाँस", family: "Waterfowl", details: "A saw-billed duck adept at catching fish in clear rivers." },

    // Pheasants
    { english: "Black Francolin", scientific: "Francolinus francolinus", nepali: "कालो तित्रा", family: "Pheasants", details: "Known for its loud, ringing call echoing across grasslands at dawn." },
    { english: "Swamp Francolin", scientific: "Francolinus gularis", nepali: "सिम तित्रा", family: "Pheasants", details: "An endangered partridge restricted to tall, wet grasslands — a Chitwan specialty." },
    { english: "Grey Francolin", scientific: "Ortygornis pondicerianus", nepali: "खैरो तित्रा", family: "Pheasants", details: "Often found in dry, open habitats and scrub, calling noisily at dawn." },
    { english: "Rain Quail", scientific: "Coturnix coromandelica", nepali: "बट्टाई", family: "Pheasants", details: "A small quail that becomes highly vocal during the monsoon season." },
    { english: "Blue-breasted Quail", scientific: "Synoicus chinensis", nepali: "नीलछाती बट्टाई", family: "Pheasants", details: "Tiny and beautifully patterned, often staying hidden in dense grass." },
    { english: "Jungle Bush Quail", scientific: "Perdicula asiatica", nepali: "जङ्गली लौकी", family: "Pheasants", details: "A small covey-forming bird usually flushed from undergrowth." },
    { english: "Red Junglefowl", scientific: "Gallus gallus", nepali: "लुइँचे", family: "Pheasants", details: "The wild ancestor of the domestic chicken, common in Chitwan's sal forests." },
    { english: "Kalij Pheasant", scientific: "Lophura leucomelanos", nepali: "कालिज", family: "Pheasants", details: "A dark, glossy pheasant with a prominent crest, found in forest undergrowth." },
    { english: "Indian Peafowl", scientific: "Pavo cristatus", nepali: "मयूर", family: "Pheasants", details: "Renowned for the male's magnificent iridescent train; calls hauntingly at dusk." },

    // Grebes
    { english: "Little Grebe", scientific: "Tachybaptus ruficollis", nepali: "डुब्की", family: "Grebes", details: "A small diving bird that frequently vanishes underwater to catch prey." },
    { english: "Great Crested Grebe", scientific: "Podiceps cristatus", nepali: "ठूलो डुब्की", family: "Grebes", details: "An elegant waterbird famous for its elaborate head-shaking mating dance." },

    // Pigeons & Doves
    { english: "Rock Dove", scientific: "Columba livia", nepali: "परेवा", family: "Pigeons & Doves", details: "The wild ancestor of the common city pigeon, often nesting in cliffs." },
    { english: "Oriental Turtle Dove", scientific: "Streptopelia orientalis", nepali: "ताम ढुकुर", family: "Pigeons & Doves", details: "A large, dark dove with a scaled pattern on its wings." },
    { english: "Eurasian Collared Dove", scientific: "Streptopelia decaocto", nepali: "काण्ठे ढुकुर", family: "Pigeons & Doves", details: "Recognizable by the black half-collar on the back of its neck." },
    { english: "Red Collared Dove", scientific: "Streptopelia tranquebarica", nepali: "रातो ढुकुर", family: "Pigeons & Doves", details: "A small, brick-red dove typically found in open country." },
    { english: "Spotted Dove", scientific: "Spilopelia chinensis", nepali: "कुर्ले ढुकुर", family: "Pigeons & Doves", details: "Commonly seen on the ground, identifiable by its spotted neck patch." },
    { english: "Emerald Dove", scientific: "Chalcophaps indica", nepali: "हरिद ढुकुर", family: "Pigeons & Doves", details: "A shy forest dove with brilliant, metallic green wings." },
    { english: "Orange-breasted Green Pigeon", scientific: "Treron bicinctus", nepali: "सुन्तलाछाती हलेसो", family: "Pigeons & Doves", details: "A vibrant arboreal pigeon well-camouflaged in the forest canopy." },
    { english: "Pompadour Green Pigeon", scientific: "Treron pompadora", nepali: "फुस्रोटाउके हलेसो", family: "Pigeons & Doves", details: "Usually found feeding on wild figs in mixed flocks." },
    { english: "Thick-billed Green Pigeon", scientific: "Treron curvirostra", nepali: "मोटोपे हलेसो", family: "Pigeons & Doves", details: "Distinctive for its heavy bill and bright green plumage." },
    { english: "Yellow-footed Green Pigeon", scientific: "Treron phoenicopterus", nepali: "हलेसो", family: "Pigeons & Doves", details: "A highly social pigeon and the state bird of Maharashtra." },
    { english: "Pin-tailed Green Pigeon", scientific: "Treron apicauda", nepali: "सुइरोपुच्छ्रे हलेसो", family: "Pigeons & Doves", details: "Features long central tail feathers and vivid green coloration." },
    { english: "Wedge-tailed Green Pigeon", scientific: "Treron sphenurus", nepali: "हरियो हलेसो", family: "Pigeons & Doves", details: "Produces an incredibly beautiful, whistling song high in the forest canopy." },

    // Cuckoos
    { english: "Greater Coucal", scientific: "Centropus sinensis", nepali: "भ्याकुर", family: "Cuckoos", details: "A large, crow-like bird with chestnut wings that clambers through vegetation." },
    { english: "Lesser Coucal", scientific: "Centropus bengalensis", nepali: "सानो भ्याकुर", family: "Cuckoos", details: "Similar to the Greater Coucal but smaller, preferring tall grass." },
    { english: "Sirkeer Malkoha", scientific: "Taccocua leschenaultii", nepali: "सिर्किर", family: "Cuckoos", details: "A heavily-built, terrestrial cuckoo with a striking red bill." },
    { english: "Green-billed Malkoha", scientific: "Phaenicophaeus tristis", nepali: "हरियोठुँडे माल्कोहा", family: "Cuckoos", details: "A long-tailed, elusive forest bird with a distinct green beak." },
    { english: "Jacobin Cuckoo", scientific: "Clamator jacobinus", nepali: "जुरे कोइली", family: "Cuckoos", details: "A black-and-white crested cuckoo that heralds the arrival of the monsoon." },
    { english: "Chestnut-winged Cuckoo", scientific: "Clamator coromandus", nepali: "खैरोपाङ्खे कोइली", family: "Cuckoos", details: "A striking, crested cuckoo with bright chestnut wings." },
    { english: "Asian Koel", scientific: "Eudynamys scolopaceus", nepali: "कोइली", family: "Cuckoos", details: "Famous for its loud, ascending 'ko-el' call that dominates summer mornings." },
    { english: "Banded Bay Cuckoo", scientific: "Cacomantis sonneratii", nepali: "पाते कोइली", family: "Cuckoos", details: "A heavily barred, small cuckoo with a distinctive repetitive whistle." },
    { english: "Grey-bellied Cuckoo", scientific: "Cacomantis passerinus", nepali: "खैरोपेट कोइली", family: "Cuckoos", details: "A small cuckoo that often parasitizes warbler and prinia nests." },
    { english: "Plaintive Cuckoo", scientific: "Cacomantis merulinus", nepali: "कारुण कोइली", family: "Cuckoos", details: "Named for its sorrowful, descending whistling call." },
    { english: "Asian Emerald Cuckoo", scientific: "Chrysococcyx maculatus", nepali: "हरिद कोइली", family: "Cuckoos", details: "A tiny, stunningly iridescent green and golden cuckoo." },
    { english: "Square-tailed Drongo-Cuckoo", scientific: "Surniculus lugubris", nepali: "चिबे कोइली", family: "Cuckoos", details: "Remarkably mimics a drongo in appearance to fool host birds." },
    { english: "Large Hawk-Cuckoo", scientific: "Hierococcyx sparverioides", nepali: "ठूलो बाजकोइली", family: "Cuckoos", details: "Mimics the appearance of a hawk to frighten away host birds from their nests." },
    { english: "Common Hawk-Cuckoo", scientific: "Hierococcyx varius", nepali: "बाज कोइली", family: "Cuckoos", details: "Often called the 'Brain-fever bird' due to its repetitive, frantic call." },
    { english: "Indian Cuckoo", scientific: "Cuculus micropterus", nepali: "काफल पाक्यो (कुहुँ कोइली)", family: "Cuckoos", details: "Its four-note call is locally heard as 'Kafal Pakyo' meaning 'the berries are ripe'." },
    { english: "Eurasian Cuckoo", scientific: "Cuculus canorus", nepali: "कुकु कोइली", family: "Cuckoos", details: "The classic brood parasite with a widely recognized 'cuck-oo' call." },

    // Nightjars
    { english: "Great Eared Nightjar", scientific: "Lyncornis macrotis", nepali: "ठूलो चइते", family: "Nightjars", details: "A massive, beautifully patterned nightjar with prominent ear tufts." },
    { english: "Jungle Nightjar", scientific: "Caprimulgus indicus", nepali: "जङ्गली चइते", family: "Nightjars", details: "A nocturnal bird that roosts perfectly camouflaged on the forest floor." },
    { english: "Large-tailed Nightjar", scientific: "Caprimulgus macrurus", nepali: "लामोपुच्छ्रे चइते", family: "Nightjars", details: "Known for its loud, echoing 'chaunk-chaunk' calls at dusk." },
    { english: "Indian Nightjar", scientific: "Caprimulgus asiaticus", nepali: "भारतीय चइते", family: "Nightjars", details: "Its churring call resembles a stone skipping across a frozen lake." },
    { english: "Savanna Nightjar", scientific: "Caprimulgus affinis", nepali: "सिम चइते", family: "Nightjars", details: "Often heard making a sharp 'chweep' sound while flying at twilight." },

    // Swifts
    { english: "Himalayan Swiftlet", scientific: "Aerodramus brevirostris", nepali: "पहाडी गौँथली", family: "Swifts", details: "Uses echolocation to navigate in the dark caves where it breeds." },
    { english: "White-throated Needletail", scientific: "Hirundapus caudacutus", nepali: "सेतोकण्ठ गौँथली", family: "Swifts", details: "One of the fastest flying birds in the world in level flight, exceeding 170 km/h." },
    { english: "Asian Palm Swift", scientific: "Cypsiurus balasiensis", nepali: "ताडी गौँथली", family: "Swifts", details: "Glues its tiny nest to palm fronds using its own saliva." },
    { english: "Alpine Swift", scientific: "Tachymarptis melba", nepali: "पहाडी ठूलो गौँथली", family: "Swifts", details: "A large, powerful swift that spends most of its life airborne." },
    { english: "House Swift", scientific: "Apus nipalensis", nepali: "घर गौँथली", family: "Swifts", details: "Commonly seen swirling in screaming flocks around buildings and bridges." },

    // Rails & Crakes
    { english: "Slaty-breasted Rail", scientific: "Lewinia striata", nepali: "खैरो सिमकुखुरा", family: "Rails & Crakes", details: "A secretive marsh bird with strongly barred flanks." },
    { english: "Brown Crake", scientific: "Zapornia akool", nepali: "खैरो क्र्याक", family: "Rails & Crakes", details: "Often seen creeping quietly along muddy, reedy banks." },
    { english: "Baillon's Crake", scientific: "Zapornia pusilla", nepali: "सानो क्र्याक", family: "Rails & Crakes", details: "A tiny, mouse-like bird that scurries through dense wetland vegetation." },
    { english: "Ruddy-breasted Crake", scientific: "Zapornia fusca", nepali: "रातो क्र्याक", family: "Rails & Crakes", details: "A small, rust-colored rail with a surprising, frog-like call." },
    { english: "Watercock", scientific: "Gallicrex cinerea", nepali: "कोरा", family: "Rails & Crakes", details: "Males grow a prominent red frontal shield during the breeding season." },
    { english: "Purple Swamphen", scientific: "Porphyrio porphyrio", nepali: "गजले सिमकुखुरा", family: "Rails & Crakes", details: "A massive, brilliantly blue-purple rail with a huge red bill." },
    { english: "White-breasted Waterhen", scientific: "Amaurornis phoenicurus", nepali: "सेतोछाती सिमकुखुरा", family: "Rails & Crakes", details: "Often seen boldly foraging in the open near ponds and marshes." },
    { english: "Common Moorhen", scientific: "Gallinula chloropus", nepali: "पानी कुखुरा", family: "Rails & Crakes", details: "A dark waterbird with a yellow-tipped red bill, frequently swimming jerkily." },
    { english: "Eurasian Coot", scientific: "Fulica atra", nepali: "पानी हाँस", family: "Rails & Crakes", details: "A black waterbird with a stark white facial shield and lobed toes." },

    // Bustards & Cranes
    { english: "Bengal Florican", scientific: "Houbaropsis bengalensis", nepali: "खर मयूर", family: "Bustards & Cranes", details: "A critically endangered bustard; males perform spectacular jumping mating displays in the grasslands." },
    { english: "Lesser Florican", scientific: "Sypheotides indicus", nepali: "सानो खर मयूर", family: "Bustards & Cranes", details: "One of the rarest birds in the world, found in tall grasses." },
    { english: "Sarus Crane", scientific: "Antigone antigone", nepali: "सारस", family: "Bustards & Cranes", details: "The tallest flying bird in the world, famous for lifelong pair bonds." },
    { english: "Demoiselle Crane", scientific: "Grus virgo", nepali: "कर्‍याङकुरुङ", family: "Bustards & Cranes", details: "The smallest crane species, migrates in massive flocks over Nepal." },

    // Shorebirds & Waders
    { english: "Black-winged Stilt", scientific: "Himantopus himantopus", nepali: "गजले पतिहाँस", family: "Shorebirds", details: "Possesses incredibly long, bright pink legs for wading in deep water." },
    { english: "Little Ringed Plover", scientific: "Charadrius dubius", nepali: "सानो राजपतिहाँस", family: "Shorebirds", details: "A small plover with a distinctive yellow eye-ring, nesting on gravel banks." },
    { english: "River Lapwing", scientific: "Vanellus duvaucelii", nepali: "खोले हुटिट्याउँ", family: "Shorebirds", details: "A strikingly patterned bird primarily found on river shingle." },
    { english: "Yellow-wattled Lapwing", scientific: "Vanellus malabaricus", nepali: "पहेँलो हुटिट्याउँ", family: "Shorebirds", details: "Has bright yellow wattles and a loud alarm call." },
    { english: "Red-wattled Lapwing", scientific: "Vanellus indicus", nepali: "हुटिट्याउँ", family: "Shorebirds", details: "Known for its loud, frantic 'did-he-do-it' alarm calls." },
    { english: "Pheasant-tailed Jacana", scientific: "Hydrophasianus chirurgus", nepali: "लामोपुच्छ्रे लामगोडे", family: "Shorebirds", details: "A beautiful wetland bird with very long toes for walking on lily pads." },
    { english: "Bronze-winged Jacana", scientific: "Metopidius indicus", nepali: "लामगोडे", family: "Shorebirds", details: "Like all jacanas, walks effortlessly over floating aquatic vegetation." },
    { english: "Pintail Snipe", scientific: "Gallinago stenura", nepali: "सुइरोपुच्छ्रे चाहा", family: "Shorebirds", details: "A well-camouflaged wader usually flushed from marshy areas." },
    { english: "Common Snipe", scientific: "Gallinago gallinago", nepali: "चाहा", family: "Shorebirds", details: "A master of camouflage with a very long bill for probing deep in mud." },
    { english: "Black-tailed Godwit", scientific: "Limosa limosa", nepali: "कालोपुच्छ्रे गोडविट", family: "Shorebirds", details: "A large wader with a long, straight bill and long legs." },
    { english: "Common Redshank", scientific: "Tringa totanus", nepali: "रातोखुट्टे", family: "Shorebirds", details: "Known for its bright orange-red legs and loud, piping alarm call." },
    { english: "Marsh Sandpiper", scientific: "Tringa stagnatilis", nepali: "सिम जलरङ्का", family: "Shorebirds", details: "A slender, delicate wader with long greenish legs." },
    { english: "Common Greenshank", scientific: "Tringa nebularia", nepali: "हरियोखुट्टे", family: "Shorebirds", details: "An elegant wader with long, greenish legs and a slightly upturned bill." },
    { english: "Green Sandpiper", scientific: "Tringa ochropus", nepali: "हरियो जलरङ्का", family: "Shorebirds", details: "Shows a vivid white rump in flight; bobs its tail frequently." },
    { english: "Wood Sandpiper", scientific: "Tringa glareola", nepali: "वन जलरङ्का", family: "Shorebirds", details: "A small, spotted sandpiper common in shallow wetlands during migration." },
    { english: "Common Sandpiper", scientific: "Actitis hypoleucos", nepali: "साधारण थुथुथी", family: "Shorebirds", details: "Constantly bobs its tail up and down while foraging along the waterline." },
    { english: "Temminck's Stint", scientific: "Calidris temminckii", nepali: "टेमिन्कको जलरङ्का", family: "Shorebirds", details: "A small, creeping stint often found on muddy banks." },

    // Gulls & Terns
    { english: "Brown-headed Gull", scientific: "Chroicocephalus brunnicephalus", nepali: "खैरोटाउके गङ्गाचil", family: "Gulls & Terns", details: "The most common inland gull in Nepal, frequenting large rivers." },
    { english: "River Tern", scientific: "Sterna aurantia", nepali: "नदी फिँट्टा", family: "Gulls & Terns", details: "A large, yellow-billed tern often seen hovering before plunging into rivers for fish." },
    { english: "Black-bellied Tern", scientific: "Sterna acuticauda", nepali: "कालोपेट फिँट्टा", family: "Gulls & Terns", details: "A near-threatened tern that nests on sandy river bars." },
    { english: "Whiskered Tern", scientific: "Chlidonias hybrida", nepali: "जुङ्गे फिँट्टा", family: "Gulls & Terns", details: "A graceful marsh tern that dips to the water surface to pick up insects." },

    // Storks
    { english: "Asian Openbill", scientific: "Anastomus oscitans", nepali: "घोंगीफोर गरुड", family: "Storks", details: "Its specialized bill has a gap adapted for gripping and crushing snail shells." },
    { english: "Black Stork", scientific: "Ciconia nigra", nepali: "कालो सारस", family: "Storks", details: "A shy, solitary stork that prefers forested wetlands." },
    { english: "Woolly-necked Stork", scientific: "Ciconia episcopus", nepali: "सेतोकण्ठ गरुड", family: "Storks", details: "Identified by its distinctive white neck and breast against a black body." },
    { english: "White Stork", scientific: "Ciconia ciconia", nepali: "सेतो सारस", family: "Storks", details: "A rare winter visitor, famous for its association with good luck in Europe." },
    { english: "Black-necked Stork", scientific: "Ephippiorhynchus asiaticus", nepali: "कालोकण्ठ गरुड", family: "Storks", details: "A large, spectacular stork with an iridescent black neck and huge bill." },
    { english: "Lesser Adjutant", scientific: "Leptoptilos javanicus", nepali: "भुइँबगले बकुल्ला", family: "Storks", details: "A large, imposing stork with a bare head and neck; a near-threatened species." },
    { english: "Greater Adjutant", scientific: "Leptoptilos dubius", nepali: "गरुड", family: "Storks", details: "One of the rarest storks in the world, critically endangered globally." },
    { english: "Painted Stork", scientific: "Mycteria leucocephala", nepali: "रङ्गी गरुड", family: "Storks", details: "A colorful large wading bird with a heavy yellow bill curving down at the tip." },

    // Cormorants & Darters
    { english: "Little Cormorant", scientific: "Microcarbo niger", nepali: "सानो जलकौवा", family: "Cormorants", details: "The smallest cormorant in Asia; a gregarious colony nester." },
    { english: "Indian Cormorant", scientific: "Phalacrocorax fuscicollis", nepali: "मझौला जलकौवा", family: "Cormorants", details: "A medium-sized cormorant with a distinctive tuft of white feathers behind the eye." },
    { english: "Great Cormorant", scientific: "Phalacrocorax carbo", nepali: "ठूलो जलकौवा", family: "Cormorants", details: "A large, black diving bird that often perches with wings spread to dry." },
    { english: "Oriental Darter", scientific: "Anhinga melanogaster", nepali: "सुइरोठूडे", family: "Cormorants", details: "Also called the 'Snakebird'; its long, flexible neck resembles a snake when swimming." },

    // Pelicans
    { english: "Great White Pelican", scientific: "Pelecanus onocrotalus", nepali: "ठूलो सेतो पेलिकन", family: "Pelicans", details: "One of the largest flying birds, with a wingspan that can exceed 3.6 meters." },
    { english: "Spot-billed Pelican", scientific: "Pelecanus philippensis", nepali: "थोप्लेठुँडे पेलिकन", family: "Pelicans", details: "A near-threatened pelican with distinctive blue-grey spots on its pouch." },

    // Herons & Egrets
    { english: "Yellow Bittern", scientific: "Ixobrychus sinensis", nepali: "पहेँलो बकुल्ला", family: "Herons & Egrets", details: "A tiny, tawny bittern that freezes with its bill pointed skyward when threatened." },
    { english: "Cinnamon Bittern", scientific: "Ixobrychus cinnamomeus", nepali: "खैरो बकुल्ला", family: "Herons & Egrets", details: "A small, reddish-brown bittern found in reedy wetlands." },
    { english: "Black Bittern", scientific: "Ixobrychus flavicollis", nepali: "कालो बकुल्ला", family: "Herons & Egrets", details: "A dark, secretive bittern often lurking near densely vegetated waterbodies." },
    { english: "Black-crowned Night Heron", scientific: "Nycticorax nycticorax", nepali: "बकैया बकुल्ला", family: "Herons & Egrets", details: "A stocky, nocturnal heron that roosts quietly in trees during the day." },
    { english: "Striated Heron", scientific: "Butorides striata", nepali: "धर्के बकुल्ला", family: "Herons & Egrets", details: "A small, compact heron that hunches on branches overhanging water." },
    { english: "Indian Pond Heron", scientific: "Ardeola grayii", nepali: "सिम बकुल्ला", family: "Herons & Egrets", details: "Looks brown and dull at rest but flashes brilliant white wings dramatically in flight." },
    { english: "Cattle Egret", scientific: "Bubulcus ibis", nepali: "गाई बकुल्ला", family: "Herons & Egrets", details: "Often follows cattle to catch insects disturbed by their hooves." },
    { english: "Grey Heron", scientific: "Ardea cinerea", nepali: "फुस्रो बकुल्ला", family: "Herons & Egrets", details: "A tall, patient hunter that stands motionless for long periods waiting for fish." },
    { english: "White-bellied Heron", scientific: "Ardea insignis", nepali: "सेतोपेट बकुल्ला", family: "Herons & Egrets", details: "A critically endangered giant heron that breeds along undisturbed large rivers." },
    { english: "Purple Heron", scientific: "Ardea purpurea", nepali: "गञ्जिफा बकुल्ला", family: "Herons & Egrets", details: "A large, secretive heron with rich rusty and purplish plumage." },
    { english: "Great Egret", scientific: "Ardea alba", nepali: "ठूलो सेतो बकुल्ला", family: "Herons & Egrets", details: "A majestic, tall white heron with a yellow bill and long black legs." },
    { english: "Intermediate Egret", scientific: "Ardea intermedia", nepali: "मझौला सेतो बकुल्ला", family: "Herons & Egrets", details: "Medium-sized and all white, often confused with the Great and Little Egrets." },
    { english: "Little Egret", scientific: "Egretta garzetta", nepali: "सानो सेतो बकुल्ला", family: "Herons & Egrets", details: "A small, dainty white egret with distinctive yellow feet." },

    // Ibises & Spoonbills
    { english: "Glossy Ibis", scientific: "Plegadis falcinellus", nepali: "चम्किलो आइबिस", family: "Ibises", details: "Appears all dark from a distance but shimmers with purple-green iridescence up close." },
    { english: "Black-headed Ibis", scientific: "Threskiornis melanocephalus", nepali: "कालोटाउके आइबिस", family: "Ibises", details: "A large white bird with a bare, black head and a long, curved bill." },
    { english: "Red-naped Ibis", scientific: "Pseudibis papillosa", nepali: "रातोटाउके आइबिस", family: "Ibises", details: "A dark ibis with a striking red patch on the back of its bare head." },
    { english: "Eurasian Spoonbill", scientific: "Platalea leucorodia", nepali: "चम्चाठुँडे", family: "Ibises", details: "Has a uniquely spatula-shaped bill that it sweeps side to side in shallow water." },

    // Osprey
    { english: "Osprey", scientific: "Pandion haliaetus", nepali: "माछामार", family: "Raptors", details: "A spectacular fish-eating raptor that plunges feet-first into water from great height." },

    // Raptors
    { english: "Black-winged Kite", scientific: "Elanus caeruleus", nepali: "कालोपाङ्खे चील", family: "Raptors", details: "A small, pale raptor with blood-red eyes that hovers while hunting." },
    { english: "Oriental Honey Buzzard", scientific: "Pernis ptilorhynchus", nepali: "काकर बाज", family: "Raptors", details: "Specializes in raiding the nests of bees and wasps for honey and larvae." },
    { english: "Jerdon's Baza", scientific: "Aviceda jerdoni", nepali: "जेर्डनको बाज", family: "Raptors", details: "A crest-bearing hawk with a distinctive crest and large yellow eyes." },
    { english: "Black Baza", scientific: "Aviceda leuphotes", nepali: "कालो बाज", family: "Raptors", details: "A small, beautifully patterned black-and-white crested hawk." },
    { english: "White-rumped Vulture", scientific: "Gyps bengalensis", nepali: "डंगर गिद्ध", family: "Raptors", details: "Once extremely abundant, now critically endangered due to diclofenac poisoning." },
    { english: "Slender-billed Vulture", scientific: "Gyps tenuirostris", nepali: "सानो खैरो गिद्ध", family: "Raptors", details: "A critically endangered vulture closely related to the Himalayan Vulture." },
    { english: "Himalayan Vulture", scientific: "Gyps himalayensis", nepali: "हिमाली गिद्ध", family: "Raptors", details: "One of the largest flying birds; soars effortlessly on Himalayan thermals." },
    { english: "Cinereous Vulture", scientific: "Aegypius monachus", nepali: "कालो गिद्ध", family: "Raptors", details: "One of the largest Old World vultures with a massive 3-meter wingspan." },
    { english: "Red-headed Vulture", scientific: "Sarcogyps calvus", nepali: "सुन गिद्ध", family: "Raptors", details: "A strikingly beautiful vulture with a bare red head and neck wattles." },
    { english: "Crested Serpent Eagle", scientific: "Spilornis cheela", nepali: "काकुस चील", family: "Raptors", details: "Circles high above the forest giving loud, piercing whistling calls." },
    { english: "Short-toed Snake Eagle", scientific: "Circaetus gallicus", nepali: "सानो काकुस चील", family: "Raptors", details: "Specializes in catching snakes and lizards, which it swallows whole." },
    { english: "Changeable Hawk-Eagle", scientific: "Nisaetus cirrhatus", nepali: "जुरे गरुड", family: "Raptors", details: "A powerful eagle of the forest interior with a long, floppy crest." },
    { english: "Rufous-bellied Eagle", scientific: "Lophotriorchis kienerii", nepali: "रातोपेट गरुड", family: "Raptors", details: "A medium-sized forest eagle with a striking rufous-orange belly." },
    { english: "Black Eagle", scientific: "Ictinaetus malaiensis", nepali: "कालो गरुड", family: "Raptors", details: "A huge, all-black eagle with long, distinctive 'S-curved' wings in flight." },
    { english: "Greater Spotted Eagle", scientific: "Clanga clanga", nepali: "ठूलो थोप्ले गरुड", family: "Raptors", details: "A vulnerable eagle that winters in the Terai, often near wetlands." },
    { english: "Steppe Eagle", scientific: "Aquila nipalensis", nepali: "स्टेप गरुड", family: "Raptors", details: "A large, dark eagle that migrates through Nepal in large flocks." },
    { english: "Bonelli's Eagle", scientific: "Aquila fasciata", nepali: "बोनेलीको गरुड", family: "Raptors", details: "A powerful, fast eagle that hunts medium-sized birds and mammals." },
    { english: "Booted Eagle", scientific: "Hieraaetus pennatus", nepali: "सानो गरुड", family: "Raptors", details: "The smallest eagle in Nepal, occurring in pale and dark color morphs." },
    { english: "Western Marsh Harrier", scientific: "Circus aeruginosus", nepali: "सिम चील", family: "Raptors", details: "Quarters low over reedbeds and grasslands hunting for small prey." },
    { english: "Hen Harrier", scientific: "Circus cyaneus", nepali: "सेतो चील", family: "Raptors", details: "Males are ghostly pale grey; both sexes show a distinct white rump." },
    { english: "Pallid Harrier", scientific: "Circus macrourus", nepali: "फुस्रो चील", family: "Raptors", details: "A very pale harrier that glides low over open grasslands." },
    { english: "Pied Harrier", scientific: "Circus melanoleucos", nepali: "छिर्बिरे चील", family: "Raptors", details: "Strikingly patterned black and white male is unmistakable in flight." },
    { english: "Crested Goshawk", scientific: "Accipiter trivirgatus", nepali: "जुरे शिक्रा", family: "Raptors", details: "A fast, agile forest hawk with a prominent crest." },
    { english: "Shikra", scientific: "Accipiter badius", nepali: "शिक्रा", family: "Raptors", details: "A small, agile hawk that dashes through trees to catch small birds." },
    { english: "Besra", scientific: "Accipiter virgatus", nepali: "बेस्रा", family: "Raptors", details: "A tiny sparrowhawk of forest interiors; a fearless hunter." },
    { english: "Eurasian Sparrowhawk", scientific: "Accipiter nisus", nepali: "भँगेरे बाज", family: "Raptors", details: "A fast, agile hunter specializing in small birds, taken by surprise attack." },
    { english: "Black Kite", scientific: "Milvus migrans", nepali: "कालो चील", family: "Raptors", details: "An opportunistic scavenger often seen wheeling in large numbers over towns." },
    { english: "Brahminy Kite", scientific: "Haliastur indus", nepali: "ब्राह्मणी चील", family: "Raptors", details: "A strikingly patterned white-and-chestnut kite associated with rivers and coasts." },
    { english: "White-tailed Eagle", scientific: "Haliaeetus albicilla", nepali: "सेतोपुच्छ्रे माछागरुड", family: "Raptors", details: "One of the world's largest eagles with a wingspan approaching 2.5 meters." },
    { english: "Pallas's Fish Eagle", scientific: "Haliaeetus leucoryphus", nepali: "पल्लासको माछागरुड", family: "Raptors", details: "A large, powerful fish eagle with a distinctive pale head and broad dark tail band." },
    { english: "Grey-headed Fish Eagle", scientific: "Haliaeetus ichthyaetus", nepali: "खैरोटाउके माछागरुड", family: "Raptors", details: "A large, powerful eagle that patrols rivers and lakes for fish." },
    { english: "Lesser Fish Eagle", scientific: "Haliaeetus humilis", nepali: "सानो माछागरुड", family: "Raptors", details: "A small fish eagle that prefers fast-flowing, forest-edged rivers." },

    // Owls
    { english: "Barn Owl", scientific: "Tyto alba", nepali: "गोठे लाटोकोसेरो", family: "Owls", details: "A ghost-like owl with a heart-shaped face and completely silent flight." },
    { english: "Brown Fish Owl", scientific: "Ketupa zeylonensis", nepali: "खैरो माछा-लाटोकोसेरो", family: "Owls", details: "A massive, yellow-eyed owl that hunts for fish and crabs along waterways at night." },
    { english: "Tawny Fish Owl", scientific: "Ketupa flavipes", nepali: "पहाडी माछा-लाटोकोसेरो", family: "Owls", details: "A large, richly-coloured owl found along fast-flowing forest streams." },
    { english: "Mottled Wood Owl", scientific: "Strix ocellata", nepali: "थोप्ले लाटोकोसेरो", family: "Owls", details: "Has a beautiful, eerie two-note call and intricately barred plumage." },
    { english: "Brown Wood Owl", scientific: "Strix leptogrammica", nepali: "खैरो लाटोकोसेरो", family: "Owls", details: "A large forest owl with dark eyes and a staring expression." },
    { english: "Collared Owlet", scientific: "Glaucidium brodiei", nepali: "काण्ठे सानो-लाटोकोसेरो", family: "Owls", details: "Tiny but bold; has a false face pattern on the back of its head to deter predators." },
    { english: "Asian Barred Owlet", scientific: "Glaucidium cuculoides", nepali: "पाते सानो-लाटोकोसेरो", family: "Owls", details: "Active by day, often boldly perching in the open and calling loudly." },
    { english: "Jungle Owlet", scientific: "Glaucidium radiatum", nepali: "जङ्गली लाटोकोसेरो", family: "Owls", details: "A small, diurnal owl with cryptic barring, heard more often than seen." },
    { english: "Spotted Owlet", scientific: "Athene brama", nepali: "थोप्ले सानो-लाटोकोसेरो", family: "Owls", details: "A small, noisy owl frequently found near human habitations and temple groves." },
    { english: "Brown Boobook", scientific: "Ninox scutulata", nepali: "खैरो बुबुक", family: "Owls", details: "A medium-sized hawk-owl with a distinctive 'book-book' call at night." },

    // Trogons
    { english: "Red-headed Trogon", scientific: "Harpactes erythrocephalus", nepali: "रातोटाउके ट्रोगोन", family: "Trogons", details: "A brilliantly colored but shy forest bird that sits very still, perfectly camouflaged." },

    // Hornbills
    { english: "Indian Grey Hornbill", scientific: "Ocyceros birostris", nepali: "सानो धनेश", family: "Hornbills", details: "Often nests in natural tree cavities, with the female sealed inside during incubation." },
    { english: "Oriental Pied Hornbill", scientific: "Anthracoceros albirostris", nepali: "कालो धनेश", family: "Hornbills", details: "A black-and-white hornbill commonly seen feeding on wild figs in the forest." },
    { english: "Great Hornbill", scientific: "Buceros bicornis", nepali: "राज धनेश", family: "Hornbills", details: "A colossal bird with a huge yellow casque; its wingbeats sound like a steam engine." },
    { english: "Rufous-necked Hornbill", scientific: "Aceros nipalensis", nepali: "खैरोकण्ठ धनेश", family: "Hornbills", details: "A vulnerable species found in tall, undisturbed forest; a spectacular sight in flight." },

    // Kingfishers
    { english: "Blyth's Kingfisher", scientific: "Alcedo hercules", nepali: "ब्लीथको माटिकोरे", family: "Kingfishers", details: "The world's largest Alcedo kingfisher, found along clear forest streams." },
    { english: "Common Kingfisher", scientific: "Alcedo atthis", nepali: "सानो माटिकोरे", family: "Kingfishers", details: "A flash of iridescent blue and orange, it plunges precisely into water for fish." },
    { english: "Blue-eared Kingfisher", scientific: "Alcedo meninting", nepali: "नीलकने माटिकोरे", family: "Kingfishers", details: "Similar to Common Kingfisher but deeper blue, found in shaded forest streams." },
    { english: "Stork-billed Kingfisher", scientific: "Pelargopsis capensis", nepali: "ठूडे माटिकोरे", family: "Kingfishers", details: "A very large kingfisher with a massive red bill, aggressively defending its territory." },
    { english: "White-throated Kingfisher", scientific: "Halcyon smyrnensis", nepali: "सेतोछाती माटिकोरे", family: "Kingfishers", details: "A bright blue and brown kingfisher that often hunts far from water." },
    { english: "Pied Kingfisher", scientific: "Ceryle rudis", nepali: "छिर्बिरे माटिकोरे", family: "Kingfishers", details: "The only kingfisher that habitually hovers over water before diving." },
    { english: "Crested Kingfisher", scientific: "Megaceryle lugubris", nepali: "जुरे माटिकोरे", family: "Kingfishers", details: "The largest kingfisher in Asia, with a ragged black-and-white crest." },

    // Bee-eaters
    { english: "Blue-bearded Bee-eater", scientific: "Nyctyornis athertoni", nepali: "नीलदाह्री मुरली", family: "Bee-eaters", details: "A large, heavy-looking bee-eater with a distinctive blue beard of feathers." },
    { english: "Green Bee-eater", scientific: "Merops orientalis", nepali: "हरियो मुरली", family: "Bee-eaters", details: "An agile, bright green bird that snatches insects mid-air with precision." },
    { english: "Blue-tailed Bee-eater", scientific: "Merops philippinus", nepali: "नीलपुच्छ्रे मुरली", family: "Bee-eaters", details: "A slender, elegant bee-eater identified by its turquoise-blue tail." },
    { english: "Chestnut-headed Bee-eater", scientific: "Merops leschenaulti", nepali: "खैरोटाउके मुरली", family: "Bee-eaters", details: "Has a rich chestnut head and nape contrasting with its green body." },

    // Rollers
    { english: "Indian Roller", scientific: "Coracias benghalensis", nepali: "भद्राई", family: "Rollers", details: "Shows a breathtaking display of brilliant blue wings when it takes flight." },
    { english: "Dollarbird", scientific: "Eurystomus orientalis", nepali: "डल्लार्ची", family: "Rollers", details: "Named for the pale 'dollar coin' patches on its wings, visible in flight." },

    // Hoopoes
    { english: "Hoopoe", scientific: "Upupa epops", nepali: "फाप्रे", family: "Hoopoes", details: "Identifiable by its spectacular fan-shaped crest and butterfly-like undulating flight." },

    // Barbets
    { english: "Coppersmith Barbet", scientific: "Psilopogon haemacephalus", nepali: "सानो कुथुर्के", family: "Barbets", details: "Its 'tuk-tuk-tuk' call sounds exactly like a coppersmith striking metal with a hammer." },
    { english: "Lineated Barbet", scientific: "Psilopogon lineatus", nepali: "कुथुर्के", family: "Barbets", details: "A streaked green barbet with a large, pale bill, often loud and conspicuous." },
    { english: "Brown-headed Barbet", scientific: "Psilopogon zeylanicus", nepali: "खैरोटाउके कुथुर्के", family: "Barbets", details: "Calls a loud 'kutroo kutroo' persistently from the canopy." },
    { english: "Blue-throated Barbet", scientific: "Psilopogon asiaticus", nepali: "नीलकण्ठे कुथुर्के", family: "Barbets", details: "A stunning barbet with a blue throat patch and red-tipped head." },
    { english: "Golden-throated Barbet", scientific: "Psilopogon franklinii", nepali: "सुनकण्ठे कुथुर्के", family: "Barbets", details: "Features a striking golden throat and red crown." },
    { english: "Great Barbet", scientific: "Psilopogon virens", nepali: "ठूलो कुथुर्के", family: "Barbets", details: "The largest barbet in the world; echoes a loud 'pio-pio' call throughout the forest." },

    // Woodpeckers
    { english: "Eurasian Wryneck", scientific: "Jynx torquilla", nepali: "जुरे गोकुल (Wryneck)", family: "Woodpeckers", details: "Can twist its neck almost 180 degrees, giving it its name." },
    { english: "Speckled Piculet", scientific: "Picumnus innominatus", nepali: "सानो थोप्ले लहाँचे", family: "Woodpeckers", details: "One of the tiniest woodpeckers in the world, barely larger than a wren." },
    { english: "Grey-capped Pygmy Woodpecker", scientific: "Yungipicus canicapillus", nepali: "फुस्रोटाउके लहाँचे", family: "Woodpeckers", details: "A tiny woodpecker that taps on thin branches and twigs." },
    { english: "Fulvous-breasted Woodpecker", scientific: "Dendrocopos macei", nepali: "खैरोछाती लहाँचे", family: "Woodpeckers", details: "A common woodpecker of the foothills, often seen on dead tree trunks." },
    { english: "Rufous Woodpecker", scientific: "Micropternus brachyurus", nepali: "रातो लहाँचे", family: "Woodpeckers", details: "An unusual woodpecker that nests inside the hard, papery nests of arboreal ants." },
    { english: "White-bellied Woodpecker", scientific: "Dryocopus javensis", nepali: "सेतोपेट लहाँचे", family: "Woodpeckers", details: "A large, spectacular woodpecker with a brilliant red crest." },
    { english: "Lesser Yellownape", scientific: "Picus chlorolophus", nepali: "सानो लहाँचे", family: "Woodpeckers", details: "A bright green woodpecker with a yellow crest and nape." },
    { english: "Greater Yellownape", scientific: "Picus flavinucha", nepali: "ठूलो लहाँचे", family: "Woodpeckers", details: "A large, bright green woodpecker with a prominent yellow crest." },
    { english: "Streak-throated Woodpecker", scientific: "Picus xanthopygaeus", nepali: "धर्केकण्ठ लहाँचे", family: "Woodpeckers", details: "A green woodpecker with fine streaking on the throat." },
    { english: "Grey-headed Woodpecker", scientific: "Picus canus", nepali: "खैरोटाउके लहाँचे", family: "Woodpeckers", details: "A quiet, unobtrusive woodpecker of broadleaved forests." },
    { english: "Himalayan Flameback", scientific: "Dinopium shorii", nepali: "हिमाली सुनलहाँचे", family: "Woodpeckers", details: "A golden-backed woodpecker found in tall Himalayan foothills forests." },
    { english: "Black-rumped Flameback", scientific: "Dinopium benghalense", nepali: "सुनलहाँचे", family: "Woodpeckers", details: "A common golden-backed woodpecker with a black rump." },
    { english: "Greater Flameback", scientific: "Chrysocolaptes guttacristatus", nepali: "ठूलो सुनलहाँचे", family: "Woodpeckers", details: "A large, spectacular woodpecker with golden wings and a bold red crest." },
    { english: "Great Slaty Woodpecker", scientific: "Mulleripicus pulverulentus", nepali: "राज लहाँचे", family: "Woodpeckers", details: "The largest living woodpecker in the world, found only in old-growth forests." },

    // Falcons
    { english: "Collared Falconet", scientific: "Microhierax caerulescens", nepali: "काण्ठे फाल्कोनेट", family: "Falcons", details: "The world's smallest raptor; hunts insects and small birds with surprising ferocity." },
    { english: "Common Kestrel", scientific: "Falco tinnunculus", nepali: "बौदहा", family: "Falcons", details: "A small falcon that uniquely hovers in mid-air while hunting for rodents below." },
    { english: "Red-necked Falcon", scientific: "Falco chicquera", nepali: "रातॉकण्ठ बाज", family: "Falcons", details: "A fast and fierce falcon that hunts small birds at dusk and dawn." },
    { english: "Amur Falcon", scientific: "Falco amurensis", nepali: "अमुर बाज", family: "Falcons", details: "Performs one of the world's longest migrations from China to South Africa." },
    { english: "Oriental Hobby", scientific: "Falco severus", nepali: "ओरिएन्टल हबी", family: "Falcons", details: "A small, dashing falcon that catches large insects and small birds in flight." },
    { english: "Laggar Falcon", scientific: "Falco jugger", nepali: "लग्गर बाज", family: "Falcons", details: "A large falcon of open grasslands; a near-threatened species." },
    { english: "Peregrine Falcon", scientific: "Falco peregrinus", nepali: "पेरेग्रिन बाज", family: "Falcons", details: "The fastest animal on Earth, reaching over 390 km/h in a hunting stoop." },

    // Parrots
    { english: "Alexandrine Parakeet", scientific: "Psittacula eupatria", nepali: "काण्ठे सुगा", family: "Parrots", details: "Named after Alexander the Great; a large parakeet with distinctive red shoulder patches." },
    { english: "Rose-ringed Parakeet", scientific: "Psittacula krameri", nepali: "तीता सुगा", family: "Parrots", details: "A highly adaptable, bright green parrot with a distinctive pink-and-black neck ring." },
    { english: "Plum-headed Parakeet", scientific: "Psittacula cyanocephala", nepali: "टुइ सुगा", family: "Parrots", details: "Males have a beautiful plum-red head; one of India's most beautiful parakeets." },
    { english: "Red-breasted Parakeet", scientific: "Psittacula alexandri", nepali: "रातोछाती सुगा", family: "Parrots", details: "A large parakeet of tall forests with a distinctive banded breast." },

    // Pittas
    { english: "Indian Pitta", scientific: "Pitta brachyura", nepali: "पित्त", family: "Pittas", details: "Called 'Navrang' (nine colors) for its stunning multicolored plumage." },
    { english: "Hooded Pitta", scientific: "Pitta sordida", nepali: "टोपी पित्त", family: "Pittas", details: "A vibrant green pitta with a black hood that forages on the forest floor." },

    // Woodshrikes & Minivets
    { english: "Common Woodshrike", scientific: "Tephrodornis pondicerianus", nepali: "साधारण वनश्राइक", family: "Woodshrikes & Minivets", details: "A modestly colored bird with a distinctive white supercilium." },
    { english: "Large Woodshrike", scientific: "Tephrodornis virgatus", nepali: "ठूलो वनश्राइक", family: "Woodshrikes & Minivets", details: "A larger woodshrike found in the canopy of tall forests." },
    { english: "Large Cuckooshrike", scientific: "Coracina macei", nepali: "ठूलो कुकुश्राइक", family: "Woodshrikes & Minivets", details: "A large, pale grey bird that forages slowly through the tree canopy." },
    { english: "Black-winged Cuckooshrike", scientific: "Lalage melaschistos", nepali: "कालोपाङ्खे कुकुश्राइक", family: "Woodshrikes & Minivets", details: "Males are dark grey with black wings; females are barred below." },
    { english: "Rosy Minivet", scientific: "Pericrocotus roseus", nepali: "गुलाबी मिनिभेट", family: "Woodshrikes & Minivets", details: "Males have a delicate pinkish-rose wash on the underparts." },
    { english: "Small Minivet", scientific: "Pericrocotus cinnamomeus", nepali: "सानो मिनिभेट", family: "Woodshrikes & Minivets", details: "A tiny, active bird flitting through the canopy, males orange, females yellow." },
    { english: "Long-tailed Minivet", scientific: "Pericrocotus ethologus", nepali: "लामोपुच्छ्रे मिनिभेट", family: "Woodshrikes & Minivets", details: "Travels in flocks through the forest, the scarlet and black males dazzling." },
    { english: "Scarlet Minivet", scientific: "Pericrocotus speciosus", nepali: "रातो मिनिभेट", family: "Woodshrikes & Minivets", details: "A stunning bird; flocks look like falling embers as they flit through the canopy." },

    // Orioles
    { english: "Indian Golden Oriole", scientific: "Oriolus kundoo", nepali: "सुनचरी", family: "Orioles & Drongos", details: "A brilliant golden-yellow bird with a melodious, flute-like song." },
    { english: "Black-naped Oriole", scientific: "Oriolus chinensis", nepali: "कालोकण्ठ सुनचरी", family: "Orioles & Drongos", details: "A bright golden oriole with a distinctive black band through the eye." },
    { english: "Black-hooded Oriole", scientific: "Oriolus xanthornus", nepali: "कालोटाउके सुनचरी", family: "Orioles & Drongos", details: "A brilliant golden-yellow bird with a contrasting deep black hood." },
    { english: "Maroon Oriole", scientific: "Oriolus traillii", nepali: "खैरो सुनचरी", family: "Orioles & Drongos", details: "A strikingly beautiful oriole with deep maroon and black plumage." },

    // Drongos
    { english: "Black Drongo", scientific: "Dicrurus macrocercus", nepali: "कालो चिबे", family: "Orioles & Drongos", details: "Boldly attacks much larger birds and often follows cattle to catch flushed insects." },
    { english: "Ashy Drongo", scientific: "Dicrurus leucophaeus", nepali: "खैरो चिबे", family: "Orioles & Drongos", details: "A slate-grey drongo with a deeply forked tail, often at forest edges." },
    { english: "White-bellied Drongo", scientific: "Dicrurus caerulescens", nepali: "सेतोपेट चिबे", family: "Orioles & Drongos", details: "A drongo with a white belly contrasting against its dark upperparts." },
    { english: "Bronzed Drongo", scientific: "Dicrurus aeneus", nepali: "सानो चिबे", family: "Orioles & Drongos", details: "A small, glossy drongo with an iridescent bronze-green sheen." },
    { english: "Lesser Racket-tailed Drongo", scientific: "Dicrurus remifer", nepali: "सानो भीमराज चिबे", family: "Orioles & Drongos", details: "Has two wire-like tail feathers ending in small 'rackets' or spatulas." },
    { english: "Hair-crested Drongo", scientific: "Dicrurus hottentottus", nepali: "केसरी चिबे", family: "Orioles & Drongos", details: "Has hair-like feathers projecting from the forehead, glossy dark plumage." },
    { english: "Greater Racket-tailed Drongo", scientific: "Dicrurus paradiseus", nepali: "भीमराज चिबे", family: "Orioles & Drongos", details: "A master mimic with two spectacular, long wire-like tail feathers ending in rackets." },

    // Fantails & Monarchs
    { english: "White-throated Fantail", scientific: "Rhipidura albicollis", nepali: "सेतोकण्ठ नचनहारी", family: "Fantails & Monarchs", details: "Constantly fans and cocks its tail in a dazzling display as it hunts insects." },
    { english: "White-browed Fantail", scientific: "Rhipidura aureola", nepali: "सेतोआँखीभौँ नचनहारी", family: "Fantails & Monarchs", details: "A lively bird with a bold white brow, always moving and fanning its tail." },
    { english: "Black-naped Monarch", scientific: "Hypothymis azurea", nepali: "कालोकण्ठ मोनार्क", family: "Fantails & Monarchs", details: "Males are vivid azure blue with a small black nape patch." },
    { english: "Asian Paradise Flycatcher", scientific: "Terpsiphone paradisi", nepali: "स्वर्गचरी", family: "Fantails & Monarchs", details: "Adult males are breathtakingly beautiful with incredibly long white tail streamers." },

    // Shrikes
    { english: "Brown Shrike", scientific: "Lanius cristatus", nepali: "खैरो भद्राई", family: "Shrikes", details: "A common winter visitor; stores prey items impaled on thorns as a 'larder'." },
    { english: "Long-tailed Shrike", scientific: "Lanius schach", nepali: "लामोपुच्छ्रे भद्राई", family: "Shrikes", details: "A miniature predator that sometimes impales its prey on thorns." },
    { english: "Grey-backed Shrike", scientific: "Lanius tephronotus", nepali: "फुस्रोढाड भद्राई", family: "Shrikes", details: "Often perches prominently on the tops of tall trees or bushes." },

    // Corvids
    { english: "Rufous Treepie", scientific: "Dendrocitta vagabunda", nepali: "कोकाले", family: "Corvids", details: "An acrobatic, long-tailed member of the crow family with a metallic clanging call." },
    { english: "Grey Treepie", scientific: "Dendrocitta formosae", nepali: "खैरो कोकाले", family: "Corvids", details: "A less common treepie found in hill forests, often in mixed-species flocks." },
    { english: "House Crow", scientific: "Corvus splendens", nepali: "घर काग", family: "Corvids", details: "A highly intelligent, adaptable crow that lives alongside humans." },
    { english: "Large-billed Crow", scientific: "Corvus macrorhynchos", nepali: "कालो काग", family: "Corvids", details: "A large, all-black crow with a very heavy, arched bill." },

    // Larks
    { english: "Bengal Bush Lark", scientific: "Mirafra assamica", nepali: "भुइँ चरी", family: "Larks", details: "Sings in aerial display flights over the grasslands of Chitwan." },
    { english: "Sand Lark", scientific: "Alaudala raytal", nepali: "बलुवा चरी", family: "Larks", details: "A pale lark found on sandy river banks and gravel bars." },
    { english: "Oriental Skylark", scientific: "Alauda gulgula", nepali: "आकाश चरी", family: "Larks", details: "Famous for its sustained, melodious song delivered high in the sky." },

    // Bulbuls
    { english: "Black-crested Bulbul", scientific: "Rubigula flaviventris", nepali: "कालोजुरे जुरेली", family: "Bulbuls", details: "Has a striking tall, black crest and bright yellow underparts." },
    { english: "Red-whiskered Bulbul", scientific: "Pycnonotus jocosus", nepali: "सिपाही जुरेली", family: "Bulbuls", details: "A lively, crested bulbul with red cheek whiskers and a red vent." },
    { english: "Himalayan Bulbul", scientific: "Pycnonotus leucogenys", nepali: "हिमाली जुरेली", family: "Bulbuls", details: "A white-cheeked bulbul with a jaunty yellow vent, common in the foothills." },
    { english: "Red-vented Bulbul", scientific: "Pycnonotus cafer", nepali: "जुरेली", family: "Bulbuls", details: "A very common, noisy songbird with a distinctive red patch beneath its tail." },
    { english: "White-throated Bulbul", scientific: "Alophoixus flaveolus", nepali: "सेतोकण्ठ जुरेली", family: "Bulbuls", details: "A somewhat shy bulbul of undergrowth with a conspicuous white throat." },
    { english: "Ashy Bulbul", scientific: "Hemixos flavala", nepali: "खैरो जुरेली", family: "Bulbuls", details: "A distinctively crested, ashy-grey bulbul of the forest interior." },
    { english: "Mountain Bulbul", scientific: "Ixos mcclellandii", nepali: "पहाडी जुरेली", family: "Bulbuls", details: "A streaked, olive-brown bulbul found in dense undergrowth." },
    { english: "Black Bulbul", scientific: "Hypsipetes leucocephalus", nepali: "कालो जुरेली", family: "Bulbuls", details: "Travels in noisy, fast-moving flocks through the forest canopy." },

    // Swallows & Martins
    { english: "Grey-throated Martin", scientific: "Riparia chinensis", nepali: "खैरोकण्ठ भीर-गौँथली", family: "Swallows", details: "Nests in burrows excavated in sandy river banks." },
    { english: "Barn Swallow", scientific: "Hirundo rustica", nepali: "घर गौँथली", family: "Swallows", details: "The most widespread swallow, recognized by its long, deeply forked tail." },
    { english: "Wire-tailed Swallow", scientific: "Hirundo smithii", nepali: "तारपुच्छ्रे गौँथली", family: "Swallows", details: "Has incredibly long, thin wire-like outer tail feathers." },
    { english: "Red-rumped Swallow", scientific: "Cecropis daurica", nepali: "रातॉकम्मरे गौँथली", family: "Swallows", details: "A chestnut-rumped swallow that builds mud nests under bridges and overhangs." },

    // Warblers
    { english: "Aberrant Bush Warbler", scientific: "Horornis flavolivaceus", nepali: "झ्याप्सी फिस्टो", family: "Warblers", details: "A skulking warbler found in dense scrub, rarely showing itself." },
    { english: "Striated Grassbird", scientific: "Megalurus palustris", nepali: "धर्के घाँस-चरी", family: "Warblers", details: "A large, long-tailed warbler of tall grasslands; sings from prominent perches." },
    { english: "Bristled Grassbird", scientific: "Schoenicola striatus", nepali: "झुसुल घाँस-चरी", family: "Warblers", details: "A globally vulnerable grassland warbler with a fan-shaped tail." },
    { english: "Blyth's Reed Warbler", scientific: "Acrocephalus dumetorum", nepali: "ब्लीथको फिस्टो", family: "Warblers", details: "A drab but accomplished mimic that includes other species' calls in its song." },
    { english: "Clamorous Reed Warbler", scientific: "Acrocephalus stentoreus", nepali: "ठूलो नर्कट फिस्टो", family: "Warblers", details: "A loud, harsh-voiced warbler of tall reed beds." },
    { english: "Zitting Cisticola", scientific: "Cisticola juncidis", nepali: "टिक्टिक फिस्टो", family: "Warblers", details: "Makes a repetitive 'zitting' call in undulating display flights over grass." },
    { english: "Golden-headed Cisticola", scientific: "Cisticola exilis", nepali: "सुनटाउके फिस्टो", family: "Warblers", details: "Males have a bright golden crown in breeding plumage." },
    { english: "Yellow-bellied Prinia", scientific: "Prinia flaviventris", nepali: "पहेँलोपेट प्रिनिया", family: "Warblers", details: "A small, active warbler with a yellow belly and long, cocked tail." },
    { english: "Ashy Prinia", scientific: "Prinia socialis", nepali: "खैरो प्रिनिया", family: "Warblers", details: "One of the most common warblers, with a loud, persistent call." },
    { english: "Grey-crowned Prinia", scientific: "Prinia cinereocapilla", nepali: "खैरोटाउके फिस्टो", family: "Warblers", details: "A vulnerable prinia restricted to the tall grasslands of the Terai." },
    { english: "Rufous-vented Prinia", scientific: "Prinia burnesii", nepali: "रातोपुच्छ्रे प्रिनिया", family: "Warblers", details: "A vulnerable, long-tailed prinia specialized for tall reed and grass habitats." },
    { english: "Plain Prinia", scientific: "Prinia inornata", nepali: "सादा प्रिनिया", family: "Warblers", details: "A very common and confiding prinia of open scrub and gardens." },
    { english: "Common Tailorbird", scientific: "Orthotomus sutorius", nepali: "पाते फिस्टो", family: "Warblers", details: "Famous for stitching together large leaves to form a cup-shaped nest." },
    { english: "Dusky Warbler", scientific: "Phylloscopus fuscatus", nepali: "खैरो फिस्टो", family: "Warblers", details: "A secretive, dark-brown leaf warbler that creeps through dense undergrowth." },
    { english: "Greenish Warbler", scientific: "Phylloscopus trochiloides", nepali: "हरियो फिस्टो", family: "Warblers", details: "A small, active warbler flitting high in the canopy; a common passage migrant." },
    { english: "Grey-hooded Warbler", scientific: "Phylloscopus xanthoschistos", nepali: "खैरोटाउके फिस्टो", family: "Warblers", details: "A sprightly warbler with a bright yellow supercilium and grey hood." },
    { english: "Thick-billed Warbler", scientific: "Arundinax aedon", nepali: "मोटोठुँडे फिस्टो", family: "Warblers", details: "A large, skulking warbler with a relatively heavy bill." },

    // Babblers
    { english: "Yellow-eyed Babbler", scientific: "Chrysomma sinense", nepali: "पहेँलो-आँखा भ्याकुर", family: "Babblers", details: "Has striking bright yellow eyes and is found in tall grass and scrub." },
    { english: "Jerdon's Babbler", scientific: "Chrysomma altirostre", nepali: "जेर्डनको भ्याकुर", family: "Babblers", details: "A vulnerable babbler restricted to tall, wet grasslands of the Terai." },
    { english: "Pin-striped Tit-Babbler", scientific: "Mixornis gularis", nepali: "धर्के भ्याकुर", family: "Babblers", details: "A small babbler with finely streaked underparts, often in mixed flocks." },
    { english: "Red-capped Babbler", scientific: "Timalia pileata", nepali: "रातोटाउके भ्याकुर", family: "Babblers", details: "Has a distinctive chestnut cap; skulks in dense bamboo and undergrowth." },
    { english: "Puff-throated Babbler", scientific: "Pellorneum ruficeps", nepali: "थोप्ले भ्याकुर", family: "Babblers", details: "Forages quietly on the forest floor like a small thrush." },
    { english: "Slender-billed Babbler", scientific: "Turdoides longirostris", nepali: "लामठुँडे भ्याकुर", family: "Babblers", details: "A vulnerable, long-billed babbler found only in the Terai grasslands." },
    { english: "Spiny Babbler", scientific: "Turdoides nipalensis", nepali: "काँडे भ्याकुर", family: "Babblers", details: "Nepal's only endemic bird species; found in scrub and grassland." },
    { english: "Jungle Babbler", scientific: "Turdoides striata", nepali: "जङ्गली भ्याकुर", family: "Babblers", details: "Always travels in noisy flocks of 7 — nicknamed the 'Seven Sisters'." },
    { english: "White-crested Laughingthrush", scientific: "Garrulax leucolophus", nepali: "सेतोटाउके भ्याकुर", family: "Babblers", details: "Travels in cackling parties through the undergrowth; has a loud, laughing call." },
    { english: "Greater Necklaced Laughingthrush", scientific: "Ianthocincla pectoralis", nepali: "ठूलो काण्ठे भ्याकुर", family: "Babblers", details: "A large, boldly patterned laughingthrush with a broad black breast band." },

    // White-eyes
    { english: "Indian White-eye", scientific: "Zosterops palpebrosus", nepali: "आँखाफारे", family: "White-eyes", details: "Tiny, active birds with a prominent white eye-ring; moves in cheerful flocks." },

    // Nuthatches
    { english: "Chestnut-bellied Nuthatch", scientific: "Sitta cinnamoventris", nepali: "रातोपेट नुथ्याच", family: "Nuthatches", details: "Creeps headfirst down tree trunks searching for insects in bark crevices." },
    { english: "Velvet-fronted Nuthatch", scientific: "Sitta frontalis", nepali: "कालोनिधार नुथ्याच", family: "Nuthatches", details: "A stunning nuthatch with a velvety black forehead and red bill." },

    // Starlings & Mynas
    { english: "Spot-winged Starling", scientific: "Saroglossa spilopterus", nepali: "थोप्लेपाङ्खे रुपी", family: "Starlings & Mynas", details: "A seasonal visitor that appears in large flocks to feed on fruiting trees." },
    { english: "Chestnut-tailed Starling", scientific: "Sturnia malabarica", nepali: "रातोपुच्छ्रे रुपी", family: "Starlings & Mynas", details: "A graceful, grey-and-chestnut starling often seen on overhead wires." },
    { english: "Brahminy Starling", scientific: "Sturnia pagodarum", nepali: "ब्राह्मणी रुपी", family: "Starlings & Mynas", details: "Has a distinctive black crest and is often found in pairs." },
    { english: "Rosy Starling", scientific: "Pastor roseus", nepali: "गुलाबी रुपी", family: "Starlings & Mynas", details: "An irruptive visitor; when it appears, it arrives in enormous flocks." },
    { english: "Asian Pied Starling", scientific: "Gracupica contra", nepali: "सेतो रुपी", family: "Starlings & Mynas", details: "A boldly patterned black-and-white starling common near villages." },
    { english: "Common Myna", scientific: "Acridotheres tristis", nepali: "डाँग्रे रुपी", family: "Starlings & Mynas", details: "One of the world's most invasive birds; highly adaptable and intelligent." },
    { english: "Bank Myna", scientific: "Acridotheres ginginianus", nepali: "नदी रुपी", family: "Starlings & Mynas", details: "Nests in burrows excavated in earthen banks and road cuttings." },
    { english: "Jungle Myna", scientific: "Acridotheres fuscus", nepali: "जङ्गली रुपी", family: "Starlings & Mynas", details: "A dark-billed myna found in moister and more forested habitats than the Common Myna." },

    // Thrushes
    { english: "Orange-headed Thrush", scientific: "Geokichla citrina", nepali: "सुन्तलाटाउके कस्तुरी", family: "Thrushes", details: "Males are stunning orange and blue-grey; a shy bird of forest floors." },
    { english: "Pied Thrush", scientific: "Geokichla wardii", nepali: "छिर्बिरे कस्तुरी", family: "Thrushes", details: "A boldly pied thrush found in dense forest undergrowth." },
    { english: "Scaly Thrush", scientific: "Zoothera dauma", nepali: "पाते कस्तुरी", family: "Thrushes", details: "Heavily scaled below; a shy bird that freezes motionless when disturbed." },
    { english: "Black-throated Thrush", scientific: "Turdus atrogularis", nepali: "कालोकण्ठ कस्तुरी", family: "Thrushes", details: "A winter visitor with a striking black throat on the male." },
    { english: "Grey-winged Blackbird", scientific: "Turdus boulboul", nepali: "खैरोपाङ्खे कालो कस्तुरी", family: "Thrushes", details: "A blackbird with pale grey wing panels, found in foothill forests." },
    { english: "Indian Blackbird", scientific: "Turdus simillimus", nepali: "कालो कस्तुरी", family: "Thrushes", details: "An all-black thrush with an orange-yellow bill; has a rich, flute-like song." },

    // Chats & Flycatchers
    { english: "Oriental Magpie-Robin", scientific: "Copsychus saularis", nepali: "धोबिनी", family: "Chats & Flycatchers", details: "A familiar, bold black-and-white bird renowned for its complex, melodious song." },
    { english: "White-rumped Shama", scientific: "Copsychus malabaricus", nepali: "शमा", family: "Chats & Flycatchers", details: "One of the finest songsters in Asia; has a long, graduated tail." },
    { english: "Indian Robin", scientific: "Copsychus fulicatus", nepali: "कालचुन्डी", family: "Chats & Flycatchers", details: "Males are blackish with a chestnut vent; often cocks its tail upright." },
    { english: "Black Redstart", scientific: "Phoenicurus ochruros", nepali: "कालो रेडस्टार्ट", family: "Chats & Flycatchers", details: "Constantly shivers its rusty tail; a common winter visitor to the Terai." },
    { english: "Plumbeous Water Redstart", scientific: "Phoenicurus fuliginosus", nepali: "पानी रेडस्टार्ट", family: "Chats & Flycatchers", details: "A dark slate-blue bird with a vivid rust tail; always found near rushing water." },
    { english: "Siberian Stonechat", scientific: "Saxicola maurus", nepali: "साइबेरियाली झ्याप्सी", family: "Chats & Flycatchers", details: "A perky winter visitor; males have a striking black head and orange breast." },
    { english: "Pied Bush Chat", scientific: "Saxicola caprata", nepali: "छिर्बिरे झ्याप्सी", family: "Chats & Flycatchers", details: "Males are boldly pied black and white; perch prominently on grass stems." },
    { english: "Grey Bush Chat", scientific: "Saxicola ferreus", nepali: "खैरो झ्याप्सी", family: "Chats & Flycatchers", details: "A grey-and-white chat found in scrubby forest edges and clearings." },
    { english: "Asian Brown Flycatcher", scientific: "Muscicapa dauurica", nepali: "खैरो फ्लाईक्याचर", family: "Chats & Flycatchers", details: "A dull, grey-brown flycatcher that returns to the same perch after each sally." },
    { english: "Taiga Flycatcher", scientific: "Ficedula albicilla", nepali: "टाइगा फ्लाईक्याचर", family: "Chats & Flycatchers", details: "A tiny flycatcher with a rusty-red throat in breeding plumage." },
    { english: "Rufous-gorgeted Flycatcher", scientific: "Ficedula strophiata", nepali: "रातॉकण्ठ फ्लाईक्याचर", family: "Chats & Flycatchers", details: "Has a beautiful orange-rufous gorget (throat patch) on an otherwise dark bird." },
    { english: "Ultramarine Flycatcher", scientific: "Ficedula superciliaris", nepali: "नील फ्लाईक्याचर", family: "Chats & Flycatchers", details: "Males are a stunning deep ultramarine blue with white in the tail." },
    { english: "Verditer Flycatcher", scientific: "Eumyias thalassinus", nepali: "नीलचरी", family: "Chats & Flycatchers", details: "A stunning, all-over copper-sulphate blue flycatcher, often on exposed branches." },
    { english: "Tickell's Blue Flycatcher", scientific: "Cyornis tickelliae", nepali: "टिकेलको नील फ्लाईक्याचर", family: "Chats & Flycatchers", details: "A beautiful flycatcher with deep blue upperparts and an orange-red breast." },
    { english: "Grey-headed Canary-flycatcher", scientific: "Culicicapa ceylonensis", nepali: "खैरोटाउके फ्लाईकैचर", family: "Chats & Flycatchers", details: "A tiny, active flycatcher with a grey head and yellow-green underparts." },

    // Leafbirds & Flowerpeckers
    { english: "Jerdon's Leafbird", scientific: "Chloropsis jerdoni", nepali: "जेर्डनको हरियो चरी", family: "Leafbirds", details: "A brilliant green bird perfectly camouflaged in the forest canopy." },
    { english: "Golden-fronted Leafbird", scientific: "Chloropsis aurifrons", nepali: "सुननिधार हरियो चरी", family: "Leafbirds", details: "Has a striking golden-orange forehead and is an excellent mimic." },
    { english: "Orange-bellied Leafbird", scientific: "Chloropsis hardwickii", nepali: "सुन्तलापेट हरियो चरी", family: "Leafbirds", details: "Males are vivid green with a striking blue moustachial stripe and orange belly." },
    { english: "Pale-billed Flowerpecker", scientific: "Dicaeum erythrorhynchos", nepali: "सेतोठुँडे पुष्पचरी", family: "Leafbirds", details: "A tiny, dull bird but important for dispersing mistletoe seeds." },
    { english: "Scarlet-backed Flowerpecker", scientific: "Dicaeum cruentatum", nepali: "रातोधार्ड पुष्पचरी", family: "Leafbirds", details: "Males are strikingly patterned with a brilliant scarlet back." },

    // Sunbirds
    { english: "Ruby-cheeked Sunbird", scientific: "Chalcoparia singalensis", nepali: "रातॉकानी बुङ्गेचरी", family: "Sunbirds", details: "Males have coppery-red cheeks contrasting with a yellow-orange breast." },
    { english: "Purple Sunbird", scientific: "Cinnyris asiaticus", nepali: "कालो बुङ्गेचरी", family: "Sunbirds", details: "A tiny bird that hovers to drink nectar; males shine in metallic purple." },
    { english: "Crimson Sunbird", scientific: "Aethopyga siparaja", nepali: "रातो बुङ्गेचरी", family: "Sunbirds", details: "Males are a brilliant crimson red; one of the most beautiful sunbirds." },

    // Sparrows & Weavers
    { english: "House Sparrow", scientific: "Passer domesticus", nepali: "घर भँगेरा", family: "Sparrows & Weavers", details: "One of the world's most widespread birds; closely associated with human settlements." },
    { english: "Eurasian Tree Sparrow", scientific: "Passer montanus", nepali: "रूख भँगेरा", family: "Sparrows & Weavers", details: "Both sexes have a chestnut cap and a distinctive black cheek spot." },
    { english: "Baya Weaver", scientific: "Ploceus philippinus", nepali: "बया टोपचरी", family: "Sparrows & Weavers", details: "Famous for weaving remarkably intricate, retort-shaped nests hanging from palm leaves." },
    { english: "Finn's Weaver", scientific: "Ploceus megarhynchus", nepali: "फिन्को टोपचरी", family: "Sparrows & Weavers", details: "A vulnerable weaver restricted to tall grasslands; males have a bright yellow cap." },

    // Munias
    { english: "Red Avadavat", scientific: "Amandava amandava", nepali: "रातो मुनिया", family: "Munias", details: "Males are a brilliant crimson red dotted with white spots — a tiny jewel." },
    { english: "White-rumped Munia", scientific: "Lonchura striata", nepali: "सेतोपुच्छ्रे मुनिया", family: "Munias", details: "A common grass finch that feeds on grass seeds, often in large flocks." },
    { english: "Scaly-breasted Munia", scientific: "Lonchura punctulata", nepali: "थोप्ले मुनिया", family: "Munias", details: "Has a scaly pattern on the breast; feeds on ripe and half-ripe seeds." },
    { english: "Tricolored Munia", scientific: "Lonchura malacca", nepali: "तीनरङ्गी मुनिया", family: "Munias", details: "Strikingly patterned with black, white, and chestnut — a handsome little finch." },

    // Wagtails & Pipits
    { english: "Forest Wagtail", scientific: "Dendronanthus indicus", nepali: "वन टिक्टिके", family: "Wagtails & Pipits", details: "Unusually wags its tail from side to side rather than up and down." },
    { english: "White Wagtail", scientific: "Motacilla alba", nepali: "सेतो टिक्टिके", family: "Wagtails & Pipits", details: "A sleek black, white, and grey bird that constantly wags its tail while walking." },
    { english: "White-browed Wagtail", scientific: "Motacilla maderaspatensis", nepali: "कालो टिक्टिके", family: "Wagtails & Pipits", details: "The largest wagtail; boldly patterned black and white with a long white brow." },
    { english: "Citrine Wagtail", scientific: "Motacilla citreola", nepali: "सुनौलो टिक्टिके", family: "Wagtails & Pipits", details: "Males in breeding plumage are stunning bright yellow with a black back." },
    { english: "Western Yellow Wagtail", scientific: "Motacilla flava", nepali: "पहेँलो टिक्टिके", family: "Wagtails & Pipits", details: "A slender, yellow-bellied wagtail common in open, damp meadows in winter." },
    { english: "Grey Wagtail", scientific: "Motacilla cinerea", nepali: "खैरो टिक्टिके", family: "Wagtails & Pipits", details: "Has the longest tail of any wagtail; always found near running water." },
    { english: "Paddyfield Pipit", scientific: "Anthus rufulus", nepali: "धानखेरे पिपिट", family: "Wagtails & Pipits", details: "The most common pipit in the Terai; sings from the tops of grass clumps." },
    { english: "Olive-backed Pipit", scientific: "Anthus hodgsoni", nepali: "रूख पिपिट", family: "Wagtails & Pipits", details: "A common winter visitor; often perches in trees unlike most pipits." },

    // Buntings
    { english: "Crested Bunting", scientific: "Emberiza lathami", nepali: "जुरे बुन्टिङ", family: "Buntings", details: "Males are strikingly black with chestnut wings and a prominent crest." },
    { english: "Yellow-breasted Bunting", scientific: "Emberiza aureola", nepali: "पहेँलोछाती बुन्टिङ", family: "Buntings", details: "Critically endangered due to trapping on migration; populations have crashed." }
];
