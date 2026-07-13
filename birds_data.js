const allBirds = [
    // Waterfowl
    { english: "Lesser Whistling Duck", scientific: "Dendrocygna javanica", nepali: "Silsile", details: "A nocturnal, gregarious duck known for its high-pitched whistling flight call." },
    { english: "Bar-headed Goose", scientific: "Anser indicus", nepali: "Khoya Hans", details: "Famed for migrating over the Himalayas at extreme altitudes." },
    { english: "Greylag Goose", scientific: "Anser anser", nepali: "Karam Hans", details: "The large, wild ancestor of most domestic geese, often seen in wetlands." },
    { english: "Ruddy Shelduck", scientific: "Tadorna ferruginea", nepali: "Chakhewa", details: "A distinctive orange-brown waterfowl often seen in pairs along rivers." },
    { english: "Common Shelduck", scientific: "Tadorna tadorna", nepali: "Seto Chakhewa", details: "A striking black, white, and chestnut duck resembling a small goose." },
    { english: "Cotton Pygmy Goose", scientific: "Nettapus coromandelianus", nepali: "Hari Hans", details: "One of the smallest waterfowl in the world, nesting in tree cavities." },
    { english: "Gadwall", scientific: "Mareca strepera", nepali: "Phunke Hans", details: "A quietly colored dabbling duck common in shallow wetlands." },
    { english: "Eurasian Wigeon", scientific: "Mareca penelope", nepali: "Suiro-puchhre Hans", details: "Known for the male's chestnut head and whistling call." },
    { english: "Mallard", scientific: "Anas platyrhynchos", nepali: "Hario-tauke Hans", details: "The most familiar wild duck; males have glossy green heads." },
    { english: "Eastern Spot-billed Duck", scientific: "Anas zonorhyncha", nepali: "Thople-thunde Hans", details: "A large dabbling duck with a distinct yellow spot on its black bill." },
    { english: "Northern Shoveler", scientific: "Spatula clypeata", nepali: "Beche Hans", details: "Easily identified by its large, spatula-shaped bill used for filter feeding." },
    { english: "Northern Pintail", scientific: "Anas acuta", nepali: "Suiropuchhre Hans", details: "An elegant duck with a long, pointed tail and slender neck." },
    { english: "Garganey", scientific: "Spatula querquedula", nepali: "Karkare Hans", details: "A highly migratory dabbling duck with a prominent white eye stripe on the male." },
    { english: "Common Teal", scientific: "Anas crecca", nepali: "Vijun Hans", details: "A small, fast-flying duck that often forms tight flocks over water." },
    { english: "Red-crested Pochard", scientific: "Netta rufina", nepali: "Sunjure Hans", details: "Males boast a striking, puffy orange-red head." },
    { english: "Common Pochard", scientific: "Aythya ferina", nepali: "Khairo-tauke Hans", details: "A diving duck featuring a bright rusty-red head and grey back." },
    { english: "Ferruginous Duck", scientific: "Aythya nyroca", nepali: "Khairo Hans", details: "A rich chestnut-colored diving duck with stark white eyes." },
    { english: "Tufted Duck", scientific: "Aythya fuligula", nepali: "Kalo Hans", details: "A distinctive diving duck with a long tuft of feathers on its head." },
    { english: "Goosander", scientific: "Mergus merganser", nepali: "Suiro-thunde Hans", details: "A saw-billed duck adept at catching fish in clear rivers." },

    // Pheasants & Allies
    { english: "Black Francolin", scientific: "Francolinus francolinus", nepali: "Kalo Titra", details: "Known for its loud, ringing call echoing across grasslands." },
    { english: "Swamp Francolin", scientific: "Francolinus gularis", nepali: "Sim Titra", details: "An endangered partridge restricted to tall, wet grasslands." },
    { english: "Grey Francolin", scientific: "Ortygornis pondicerianus", nepali: "Khairo Titra", details: "Often found in dry, open habitats and scrub." },
    { english: "Rain Quail", scientific: "Coturnix coromandelica", nepali: "Batahi", details: "A small quail that becomes highly vocal during the monsoon." },
    { english: "Blue-breasted Quail", scientific: "Synoicus chinensis", nepali: "Nil-chhati Batahi", details: "Tiny and beautifully patterned, often staying hidden in dense grass." },
    { english: "Jungle Bush Quail", scientific: "Perdicula asiatica", nepali: "Jangali Lauki", details: "A small covey-forming bird usually flushed from undergrowth." },
    { english: "Red Junglefowl", scientific: "Gallus gallus", nepali: "Luinche", details: "The wild ancestor of the domestic chicken, common in Chitwan's forests." },
    { english: "Kalij Pheasant", scientific: "Lophura leucomelanos", nepali: "Kalij", details: "A dark, glossy pheasant with a prominent crest, found in forest undergrowth." },
    { english: "Indian Peafowl", scientific: "Pavo cristatus", nepali: "Mayur", details: "Renowned for the male's magnificent iridescent tail fan." },

    // Grebes
    { english: "Little Grebe", scientific: "Tachybaptus ruficollis", nepali: "Dubki", details: "A small diving bird that frequently vanishes underwater to catch prey." },
    { english: "Great Crested Grebe", scientific: "Podiceps cristatus", nepali: "Thulo Dubki", details: "An elegant waterbird famous for its elaborate mating dance on the water." },

    // Pigeons and Doves
    { english: "Rock Dove", scientific: "Columba livia", nepali: "Parewa", details: "The wild ancestor of the common city pigeon, often nesting in cliffs." },
    { english: "Oriental Turtle Dove", scientific: "Streptopelia orientalis", nepali: "Tam Dhukur", details: "A large, dark dove with a scaled pattern on its wings." },
    { english: "Eurasian Collared Dove", scientific: "Streptopelia decaocto", nepali: "Kanthe Dhukur", details: "Recognizable by the black half-collar on the back of its neck." },
    { english: "Red Collared Dove", scientific: "Streptopelia tranquebarica", nepali: "Rato Dhukur", details: "A small, brick-red dove typically found in open country." },
    { english: "Spotted Dove", scientific: "Spilopelia chinensis", nepali: "Kurle Dhukur", details: "Commonly seen on the ground, identifiable by its spotted neck patch." },
    { english: "Emerald Dove", scientific: "Chalcophaps indica", nepali: "Harid Dhukur", details: "A shy forest dove with brilliant, metallic green wings." },
    { english: "Orange-breasted Green Pigeon", scientific: "Treron bicinctus", nepali: "Suntala-chhati Haleso", details: "A vibrant arboreal pigeon well-camouflaged in the forest canopy." },
    { english: "Pompadour Green Pigeon", scientific: "Treron pompadora", nepali: "Phusro-tauke Haleso", details: "Usually found feeding on wild figs in mixed flocks." },
    { english: "Thick-billed Green Pigeon", scientific: "Treron curvirostra", nepali: "Motope Haleso", details: "Distinctive for its heavy bill and bright green plumage." },
    { english: "Yellow-footed Green Pigeon", scientific: "Treron phoenicopterus", nepali: "Haleso", details: "A highly social pigeon and the state bird of Maharashtra." },
    { english: "Pin-tailed Green Pigeon", scientific: "Treron apicauda", nepali: "Suiro-puchhre Haleso", details: "Features long central tail feathers and vivid green coloration." },
    { english: "Wedge-tailed Green Pigeon", scientific: "Treron sphenurus", nepali: "Hario Haleso", details: "Produces an incredibly beautiful, whistling song high in the trees." },

    // Cuckoos
    { english: "Greater Coucal", scientific: "Centropus sinensis", nepali: "Vyakur", details: "A large, crow-like bird with chestnut wings that clambers through vegetation." },
    { english: "Lesser Coucal", scientific: "Centropus bengalensis", nepali: "Sano Vyakur", details: "Similar to the Greater Coucal but smaller, preferring tall grass." },
    { english: "Sirkeer Malkoha", scientific: "Taccocua leschenaultii", nepali: "Sirkeer", details: "A heavily-built, terrestrial cuckoo with a red bill." },
    { english: "Green-billed Malkoha", scientific: "Phaenicophaeus tristis", nepali: "Hario-thunde Malkoha", details: "A long-tailed, elusive forest bird with a distinct green beak." },
    { english: "Jacobin Cuckoo", scientific: "Clamator jacobinus", nepali: "Jure Koili", details: "A black-and-white crested cuckoo that heralds the monsoon." },
    { english: "Chestnut-winged Cuckoo", scientific: "Clamator coromandus", nepali: "Khairo-pakhete Koili", details: "A striking, crested cuckoo with bright chestnut wings." },
    { english: "Asian Koel", scientific: "Eudynamys scolopaceus", nepali: "Koili", details: "Famous for its loud, echoing 'ko-el' call during the summer." },
    { english: "Banded Bay Cuckoo", scientific: "Cacomantis sonneratii", nepali: "Pate Koili", details: "A heavily barred, small cuckoo with a distinctive repetitive whistle." },
    { english: "Grey-bellied Cuckoo", scientific: "Cacomantis passerinus", nepali: "Khairo-pet Koili", details: "A small cuckoo that often parasitizes warbler nests." },
    { english: "Plaintive Cuckoo", scientific: "Cacomantis merulinus", nepali: "Karon Koili", details: "Named for its sorrowful, descending whistling call." },
    { english: "Asian Emerald Cuckoo", scientific: "Chrysococcyx maculatus", nepali: "Harid Koili", details: "A tiny, stunningly iridescent green and golden cuckoo." },
    { english: "Square-tailed Drongo-Cuckoo", scientific: "Surniculus lugubris", nepali: "Chibe Koili", details: "Remarkably mimics a drongo to fool host birds." },
    { english: "Large Hawk-Cuckoo", scientific: "Hierococcyx sparverioides", nepali: "Thulo Baj Koili", details: "Mimics the appearance of a hawk to frighten away host birds from their nests." },
    { english: "Common Hawk-Cuckoo", scientific: "Hierococcyx varius", nepali: "Baj Koili", details: "Often called the 'Brain-fever bird' due to its repetitive, frantic call." },
    { english: "Indian Cuckoo", scientific: "Cuculus micropterus", nepali: "Kafal Pakyo", details: "Its four-note call is locally translated as 'Kafal Pakyo' (the berries are ripe)." },
    { english: "Eurasian Cuckoo", scientific: "Cuculus canorus", nepali: "Kuku Koili", details: "The classic brood parasite with a widely recognized 'cuck-oo' call." },

    // Nightjars
    { english: "Great Eared Nightjar", scientific: "Lyncornis macrotis", nepali: "Thulo Chaite", details: "A massive, beautifully patterned nightjar with ear tufts." },
    { english: "Jungle Nightjar", scientific: "Caprimulgus indicus", nepali: "Jangali Chaite", details: "A nocturnal bird that roosts perfectly camouflaged on the forest floor." },
    { english: "Large-tailed Nightjar", scientific: "Caprimulgus macrurus", nepali: "Lam-puchhre Chaite", details: "Known for its loud, echoing 'chaunk-chaunk' calls at dusk." },
    { english: "Indian Nightjar", scientific: "Caprimulgus asiaticus", nepali: "Bharatiya Chaite", details: "Its call resembles a stone skipping across a frozen lake." },
    { english: "Savanna Nightjar", scientific: "Caprimulgus affinis", nepali: "Sima Chaite", details: "Often heard making a sharp 'chweep' sound while flying at twilight." },

    // Swifts
    { english: "Himalayan Swiftlet", scientific: "Aerodramus brevirostris", nepali: "Pahadi Gaunthali", details: "Uses echolocation to navigate in dark caves where it breeds." },
    { english: "White-throated Needletail", scientific: "Hirundapus caudacutus", nepali: "Seto-kantha Gaunthali", details: "One of the fastest flying birds in the world in level flight." },
    { english: "Asian Palm Swift", scientific: "Cypsiurus balasiensis", nepali: "Tadi Gaunthali", details: "Glues its nest to palm fronds using its own saliva." },
    { english: "Alpine Swift", scientific: "Tachymarptis melba", nepali: "Pahadi Thulo Gaunthali", details: "A large, powerful swift that spends most of its life airborne." },
    { english: "House Swift", scientific: "Apus nipalensis", nepali: "Ghar Gaunthali", details: "Commonly seen swirling in flocks around buildings and bridges." },

    // Rails and Crakes
    { english: "Slaty-breasted Rail", scientific: "Lewinia striata", nepali: "Khairo Simkukhura", details: "A secretive marsh bird with strongly barred flanks." },
    { english: "Brown Crake", scientific: "Zapornia akool", nepali: "Khairo Crake", details: "Often seen creeping quietly along muddy, reedy banks." },
    { english: "Baillon's Crake", scientific: "Zapornia pusilla", nepali: "Sano Crake", details: "A tiny, mouse-like bird that scurries through wetland vegetation." },
    { english: "Ruddy-breasted Crake", scientific: "Zapornia fusca", nepali: "Rato Crake", details: "A small, rust-colored rail with a surprising, frog-like call." },
    { english: "Watercock", scientific: "Gallicrex cinerea", nepali: "Kora", details: "Males have a prominent red shield on their forehead during breeding season." },
    { english: "Purple Swamphen", scientific: "Porphyrio porphyrio", nepali: "Gajale Simkukhura", details: "A massive, brilliantly blue-purple rail with a huge red bill." },
    { english: "White-breasted Waterhen", scientific: "Amaurornis phoenicurus", nepali: "Setochhati Simkukhura", details: "Often seen boldly foraging in the open near ponds and marshes." },
    { english: "Common Moorhen", scientific: "Gallinula chloropus", nepali: "Pani Kukhura", details: "A dark waterbird with a yellow-tipped red bill, frequently swimming." },
    { english: "Eurasian Coot", scientific: "Fulica atra", nepali: "Pani Hans", details: "A black waterbird with a stark white facial shield and lobed toes." },

    // Bustards & Cranes
    { english: "Bengal Florican", scientific: "Houbaropsis bengalensis", nepali: "Khar Mujur", details: "A critically endangered bustard known for spectacular jumping mating displays." },
    { english: "Sarus Crane", scientific: "Antigone antigone", nepali: "Saras", details: "The tallest flying bird in the world, famous for lifelong pair bonds." },

    // Stilts and Lapwings
    { english: "Black-winged Stilt", scientific: "Himantopus himantopus", nepali: "Gajale Patihans", details: "Possesses incredibly long, bright pink legs for wading in deep water." },
    { english: "Red-wattled Lapwing", scientific: "Vanellus indicus", nepali: "Hutihuti", details: "Known for its loud, frantic 'did-he-do-it' alarm calls." },
    { english: "River Lapwing", scientific: "Vanellus duvaucelii", nepali: "Kholey Hutihuti", details: "A strikingly patterned bird primarily found on river shingle." },

    // Jacanas
    { english: "Pheasant-tailed Jacana", scientific: "Hydrophasianus chirurgus", nepali: "Lam-puchhre Lamgodthe", details: "A beautiful wetland bird with very long toes for walking on lily pads." },
    { english: "Bronze-winged Jacana", scientific: "Metopidius indicus", nepali: "Lamgodthe", details: "Like all jacanas, it walks effortlessly over floating aquatic vegetation." },

    // Sandpipers
    { english: "Common Snipe", scientific: "Gallinago gallinago", nepali: "Chaha", details: "A master of camouflage with a very long bill for probing mud." },
    { english: "Common Sandpiper", scientific: "Actitis hypoleucos", nepali: "Sadharaani Thututhuthi", details: "Constantly bobs its tail up and down while foraging near water." },
    { english: "Common Greenshank", scientific: "Tringa nebularia", nepali: "Hario-khutte", details: "An elegant wader with long, greenish legs and a slightly upturned bill." },

    // Gulls and Terns
    { english: "River Tern", scientific: "Sterna aurantia", nepali: "Nadi Fitta", details: "A large, yellow-billed tern often seen diving into rivers for fish." },

    // Storks
    { english: "Asian Openbill", scientific: "Anastomus oscitans", nepali: "Ghonghiiphor Baha", details: "Its specialized bill has a gap in the middle, adapted for crushing snail shells." },
    { english: "Lesser Adjutant", scientific: "Leptoptilos javanicus", nepali: "Bhuinbagale Baha", details: "A large, imposing stork with a bare head and neck." },
    { english: "Painted Stork", scientific: "Mycteria leucocephala", nepali: "Rangi Baha", details: "A colorful, large wading bird with a heavy yellow bill curving down at the tip." },

    // Cormorants and Darters
    { english: "Great Cormorant", scientific: "Phalacrocorax carbo", nepali: "Thulo Jalakauwa", details: "A large, black diving bird that often perches with wings spread to dry." },
    { english: "Oriental Darter", scientific: "Anhinga melanogaster", nepali: "Suirothaade", details: "Also known as the 'Snakebird' because its long neck resembles a snake when swimming." },

    // Herons, Egrets, Bitterns
    { english: "Great Egret", scientific: "Ardea alba", nepali: "Thulo Seto Bakulla", details: "A majestic, tall white heron with a yellow bill and black legs." },
    { english: "Indian Pond Heron", scientific: "Ardeola grayii", nepali: "Sim Bakulla", details: "Looks brown and dull at rest, but flashes brilliant white wings in flight." },
    { english: "Purple Heron", scientific: "Ardea purpurea", nepali: "Ganjifa Bakulla", details: "A large, secretive heron with rich rusty and purplish plumage." },
    { english: "Black-crowned Night Heron", scientific: "Nycticorax nycticorax", nepali: "Bakaiya Bakulla", details: "A stocky, nocturnal heron that roosts quietly in trees during the day." },

    // Ibises
    { english: "Black-headed Ibis", scientific: "Threskiornis melanocephalus", nepali: "Kalo-tauke Ibis", details: "A large white bird with a bare, black head and curved bill." },

    // Raptors (Hawks, Eagles, Vultures)
    { english: "Osprey", scientific: "Pandion haliaetus", nepali: "Machhamar", details: "A spectacular fish-eating raptor that plunges feet-first into water." },
    { english: "Crested Serpent Eagle", scientific: "Spilornis cheela", nepali: "Kakkus Chil", details: "Often seen soaring while giving a loud, piercing whistling call." },
    { english: "White-rumped Vulture", scientific: "Gyps bengalensis", nepali: "Dangar Giddha", details: "Once abundant, now critically endangered due to veterinary drugs in carcasses." },
    { english: "Red-headed Vulture", scientific: "Sarcogyps calvus", nepali: "Sun Giddha", details: "A strikingly beautiful vulture with a bare red head and black plumage." },
    { english: "Grey-headed Fish Eagle", scientific: "Haliaeetus ichthyaetus", nepali: "Khairotauke Matsyagarud", details: "A large, powerful eagle that patrols rivers and lakes for fish." },
    { english: "Shikra", scientific: "Accipiter badius", nepali: "Shikra", details: "A small, agile hawk commonly seen dashing through trees to catch prey." },

    // Owls
    { english: "Barn Owl", scientific: "Tyto alba", nepali: "Gothe Latokosero", details: "A ghost-like owl with a heart-shaped face and completely silent flight." },
    { english: "Brown Fish Owl", scientific: "Ketupa zeylonensis", nepali: "Khairo Matsya-latokosero", details: "A massive, yellow-eyed owl that hunts for fish and crabs at night." },
    { english: "Spotted Owlet", scientific: "Athene brama", nepali: "Thople Sano-latokosero", details: "A small, noisy owl frequently found near human habitations." },

    // Trogons, Hornbills, Kingfishers, Bee-eaters
    { english: "Red-headed Trogon", scientific: "Harpactes erythrocephalus", nepali: "Rato-tauke Trogon", details: "A brilliantly colored but shy forest bird that sits very still." },
    { english: "Great Hornbill", scientific: "Buceros bicornis", nepali: "Raj Dhanesh", details: "A colossal bird with a huge yellow casque; its wingbeats sound like a steam engine." },
    { english: "Oriental Pied Hornbill", scientific: "Anthracoceros albirostris", nepali: "Kalo Dhanesh", details: "A black-and-white hornbill commonly seen feeding on wild figs." },
    { english: "Stork-billed Kingfisher", scientific: "Pelargopsis capensis", nepali: "Thunde Matikore", details: "A very large kingfisher with a massive red bill, defending its territory fiercely." },
    { english: "White-throated Kingfisher", scientific: "Halcyon smyrnensis", nepali: "Setochhati Matikore", details: "A bright blue and brown kingfisher that often hunts away from water." },
    { english: "Green Bee-eater", scientific: "Merops orientalis", nepali: "Hario Murali", details: "An agile, bright green bird that snatches insects mid-air." },
    
    // Rollers and Hoopoes
    { english: "Indian Roller", scientific: "Coracias benghalensis", nepali: "Bhadrai", details: "Shows a breathtaking display of bright blue wings when in flight." },
    { english: "Hoopoe", scientific: "Upupa epops", nepali: "Phapre", details: "Identifiable by its spectacular crown of feathers and butterfly-like flight." },

    // Barbets and Woodpeckers
    { english: "Coppersmith Barbet", scientific: "Psilopogon haemacephalus", nepali: "Sano Kuthurke", details: "Its call sounds exactly like a coppersmith striking metal with a hammer." },
    { english: "Great Barbet", scientific: "Psilopogon virens", nepali: "Thulo Kuthurke", details: "The largest barbet, echoing a loud 'pio-pio' call throughout the forest." },
    { english: "Greater Flameback", scientific: "Chrysocolaptes guttacristatus", nepali: "Thulo Sun Lahanche", details: "A large woodpecker with stunning golden-yellow wings and a red crest." },
    { english: "Great Slaty Woodpecker", scientific: "Mulleripicus pulverulentus", nepali: "Raj Lahanche", details: "The largest living woodpecker in the world, usually found in old-growth forests." },

    // Falcons and Parrots
    { english: "Common Kestrel", scientific: "Falco tinnunculus", nepali: "Baudaha", details: "A small falcon that can uniquely hover in mid-air while hunting for rodents." },
    { english: "Rose-ringed Parakeet", scientific: "Psittacula krameri", nepali: "Tita Suga", details: "A loud, highly adaptable bright green parrot with a distinctive neck ring." },
    { english: "Alexandrine Parakeet", scientific: "Psittacula eupatria", nepali: "Kanthe Suga", details: "A massive parakeet named after Alexander the Great, with red shoulder patches." },

    // Pittas, Orioles, Drongos, Shrikes
    { english: "Indian Pitta", scientific: "Pitta brachyura", nepali: "Pitta", details: "Also called the 'Navrang' for the nine beautiful colors in its plumage." },
    { english: "Black-hooded Oriole", scientific: "Oriolus xanthornus", nepali: "Kalo-tauke Sunachari", details: "A brilliant golden-yellow bird with a contrasting deep black head." },
    { english: "Greater Racket-tailed Drongo", scientific: "Dicrurus paradiseus", nepali: "Bhimraj Chibe", details: "Has two long wire-like tail feathers and is a master mimic of other birds." },
    { english: "Long-tailed Shrike", scientific: "Lanius schach", nepali: "Lam-puchhre Bhadrai", details: "A miniature predator that sometimes impales its prey on thorns." },

    // Corvids, Swallows, Bulbuls
    { english: "Rufous Treepie", scientific: "Dendrocitta vagabunda", nepali: "Kokale", details: "An acrobatic, long-tailed member of the crow family with a metallic call." },
    { english: "Barn Swallow", scientific: "Hirundo rustica", nepali: "Ghar Gaunthali", details: "A widespread swallow recognized by its deeply forked tail." },
    { english: "Red-vented Bulbul", scientific: "Pycnonotus cafer", nepali: "Jureli", details: "A very common songbird with a distinctive red patch beneath its tail." },

    // Babblers, Thrushes, Flycatchers
    { english: "Jungle Babbler", scientific: "Turdoides striata", nepali: "Jangali Bhyakur", details: "Often called the 'Seven Sisters' because they always travel in loud, social flocks." },
    { english: "Oriental Magpie-Robin", scientific: "Copsychus saularis", nepali: "Dhobini", details: "A familiar black-and-white bird known for its beautiful and complex songs." },
    { english: "Asian Paradise Flycatcher", scientific: "Terpsiphone paradisi", nepali: "Swarag Chari", details: "Adult males are breathtakingly white with incredibly long tail streamers." },
    { english: "Verditer Flycatcher", scientific: "Eumyias thalassinus", nepali: "Nil Chari", details: "A stunning, copper-sulphate blue flycatcher often seen on exposed branches." },

    // Sunbirds, Weavers, Wagtails
    { english: "Purple Sunbird", scientific: "Cinnyris asiaticus", nepali: "Kalo Bungechari", details: "A tiny bird that hovers to drink nectar; males shine in metallic purple." },
    { english: "Baya Weaver", scientific: "Ploceus philippinus", nepali: "Baya Topchari", details: "Famous for weaving incredibly intricate, hanging flask-shaped nests from grass." },
    { english: "White Wagtail", scientific: "Motacilla alba", nepali: "Seto Tiktike", details: "A sleek black, white, and grey bird that constantly wags its tail while walking." }
];
