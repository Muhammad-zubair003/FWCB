// Dummy data, same as script.js theke copy korun
const clansData = [
    {name:"Black Daku 1",logo:"blackdaku1.jpeg",tag:"#RY2J98PL",cwl_league:"Crystal League I",raid_medals:"1200-1600",clan_capital:10,clan_level:19,facebook_link:"https://www.facebook.com/habibcocbd"},
    {name:"WAR HERO™",logo:"warhero.jpg",tag:"#20G0Q0J20",cwl_league:"Master I",raid_medals:"1200-1600",clan_capital:10,clan_level:21,facebook_link:"https://www.facebook.com/whziiihad"},
    {name:"ICØNIC BØYS",logo:"iconicboys.jpeg",tag:"#2G0JRQVOC",cwl_league:"Master II",raid_medals:"1200-1600",clan_capital:10,clan_level:20,facebook_link:"https://www.facebook.com/zubairmuhammadzami.003"},
    {name:"BLACK DAIMOND",logo:"blackdiamond.jpeg",tag:"#29PCY892U",cwl_league:"Master II",raid_medals:"1200-1600",clan_capital:380,clan_level:20,facebook_link:"https://www.facebook.com/habibcocbd"},
    {name:"ROYAL FIGHTER",logo:"royalfighter.jpeg",tag:"#2GJJ9YLQL",cwl_league:"Crystal I",raid_medals:"1200-1600",clan_capital:510,clan_level:19,facebook_link:"https://www.facebook.com/habibcocbd"},
    {name:"silent killer",logo:"silentkiller.jpeg",tag:"#2YP80VGLU",cwl_league:"Master III",raid_medals:"1200-1600",clan_capital:405,clan_level:21,facebook_link:"https://www.facebook.com/habibcocbd"},
    {name:"GANGSTAR 2K15™",logo:"gangstar.jpeg",tag:"#Y2G2C2RL",cwl_league:"Gold I",raid_medals:"1200-1600",clan_capital:290,clan_level:16,facebook_link:"https://www.facebook.com/talapatara.sepa.i.819104"},
    {name:"SARKER EMPIRE",logo:"sarkerempire.jpeg",tag:"#2GYRPL999",cwl_league:"Crystal II",raid_medals:"1200-1600",clan_capital:330,clan_level:18,facebook_link:"https://www.facebook.com/SaifullahCoC"},
    {name:"Abdullah's clan",logo:"abdullahsclan.jpeg",tag:"#2Q0LVQUYL",cwl_league:"Silver I",raid_medals:"1200-1600",clan_capital:200,clan_level:13,facebook_link:"https://www.facebook.com/md.abdullah.298871?mibextid=ZbWKwL"},
    {name:"BANGLADASH CLAN",logo:"bangladeshclan.jpeg",tag:"#20CV0Y92U",cwl_league:"Champion II",raid_medals:"1200-1600",clan_capital:600,clan_level:22,facebook_link:"https://www.facebook.com/share/1Chg6DCMbv/"},
    {name:"Miracle Vibes",logo:"miraclevibes.jpeg",tag:"#2GLOYLCCC",cwl_league:"Master I",raid_medals:"1200-1600",clan_capital:410,clan_level:21,facebook_link:"https://www.facebook.com/shahin.imam.399"},
    {name:"SHOWTIME",logo:"showtime.jpeg",tag:"#2RU229RCQ",cwl_league:"Crystal III",raid_medals:"1200-1600",clan_capital:350,clan_level:18,facebook_link:"https://www.facebook.com/shahin.imam.399"},
    {name:"BD DEATH SAW",logo:"bddeathsaw.jpeg",tag:"#PUVRUOGG",cwl_league:"Champion I",raid_medals:"1200-1600",clan_capital:700,clan_level:23,facebook_link:"https://www.facebook.com/shahriar.arifen.2025"},
    {name:"AVENGERS",logo:"AVENGERS.jpeg",tag:"#2Q8RPY2UY",cwl_league:"Master II",raid_medals:"1200-1600",clan_capital:370,clan_level:20,facebook_link:"https://www.facebook.com/share/1CoDaaARsX/"},
    {name:"BANGLADESH",logo:"bangladesh.jpeg",tag:"#280P00J8P",cwl_league:"Crystal I",raid_medals:"1200-1600",clan_capital:295,clan_level:19,facebook_link:"https://www.facebook.com/share/1Chg6DCMbv/"},
    {name:"Bangladesh",logo:"Bangladesh (2).jpeg",tag:"#8J8P88CP",cwl_league:"Gold III",raid_medals:"1200-1600",clan_capital:210,clan_level:15,facebook_link:"https://www.facebook.com/share/14KvZyWpeuA/"},
    {name:"BD Army 71",logo:"bdarmy71.jpeg",tag:"#2YU2PCUR2",cwl_league:"Master III",raid_medals:"1200-1600",clan_capital:420,clan_level:21,facebook_link:"https://www.facebook.com/share/1B6iGR4D5Z/"},
    {name:"THE AVENGERS",logo:"theavengers.jpeg",tag:"#2QJ2QLCOR",cwl_league:"Champion III",raid_medals:"1200-1600",clan_capital:480,clan_level:22,facebook_link:"https://www.facebook.com/firoz.nur"},
    {name:"BUI Clashers",logo:"buiclasher.jpeg",tag:"#QG0GG0QP",cwl_league:"Crystal II",raid_medals:"1200-1600",clan_capital:360,clan_level:18,facebook_link:"https://www.facebook.com/mhmd.nylwy.hsyn"},
    {name:"Blue Star",logo:"bluestar.jpeg",tag:"#9JVV8RC8",cwl_league:"Gold I",raid_medals:"1200-1600",clan_capital:250,clan_level:16,facebook_link:"https://www.facebook.com/Robiul4483"},
    {name:"CHATKHIL clan",logo:"chatkhilclan.jpeg",tag:"#J9RCY8UG",cwl_league:"Master I",raid_medals:"1200-1600",clan_capital:430,clan_level:21,facebook_link:"https://www.facebook.com/pu1996"},
    {name:"BD FIGHTER",logo:"bdfighter.jpeg",tag:"#RCCGRPY8",cwl_league:"Crystal II",raid_medals:"1200-1600",clan_capital:340,clan_level:18,facebook_link:"https://www.facebook.com/pu1996"},
    {name:"Noakhali Clan",logo:"noakhaliclan.jpeg",tag:"#229L2GJ0RU",cwl_league:"Champion III",raid_medals:"1200-1600",clan_capital:495,clan_level:22,facebook_link:"https://www.facebook.com/pu1996"},
    {name:"CTG SUPER CLAN",logo:"ctgsuperclan.jpeg",tag:"#Q2UJ8LPP",cwl_league:"Master II",raid_medals:"1200-1600",clan_capital:375,clan_level:20,facebook_link:"https://www.facebook.com/muhammad.arfatuddin.11"},
    {name:"The Lion Empire",logo:"thelionempire.jpeg",tag:"#2LCLQPJYR",cwl_league:"Gold I",raid_medals:"1200-1600",clan_capital:265,clan_level:16,facebook_link:"https://www.facebook.com/shahin.imam.399"},
    {name:"Angry Bøy's™",logo:"angryboys.jpeg",tag:"#20QJQ0JCR",cwl_league:"Master II",raid_medals:"1200-1600",clan_capital:"Bronze I",clan_level:20,facebook_link:"https://www.facebook.com/sajidur2017"},
    {name:"BD CLASHER",logo:"bdclasher.jpg",tag:"#2JRRPRU89",cwl_league:"Champion I",raid_medals:"1200-1600",clan_capital:720,clan_level:23,facebook_link:"https://www.facebook.com/profile.php?id=61551719798176"},
];

// Get clan tag from URL
const params = new URLSearchParams(window.location.search);
const tag = params.get('tag');
const clan = clansData.find(c => c.tag === tag);
const container = document.getElementById('clan-details-content');

if (!clan) {
    container.innerHTML = "<p>Clan not found.</p>";
} else {
    // Clash of Clans clan search link
    const clanLink = `https://link.clashofclans.com/en?action=OpenClanProfile&tag=${encodeURIComponent(clan.tag.replace('#',''))}`;
    container.innerHTML = `
        <div style="max-width:900px;margin:40px auto;">
            <div style="display:flex;justify-content:center;">
                <div style="background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);padding:20px 24px;text-align:center;display:flex;flex-direction:column;align-items:center;min-width:160px;">
                    <div class="clan-logo" style="background-image: url('images/${clan.logo}'); width:90px;height:90px;margin:0 auto 10px;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.10);"></div>
                    <h2 class="clan-name" style="margin:8px 0 0 0;font-size:1.1em;">${clan.name}</h2>
                    <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px;align-items:center;">
                        <a href="${clanLink}" target="_blank" class="visit-clan-btn">
                            Visit Clan
                        </a>
                        <a href="${clan.facebook_link}" target="_blank" class="contact-leader-btn">
                            Contact Leader
                        </a>
                    </div>
                </div>
            </div>
            <div style="display:flex;gap:18px;flex-wrap:wrap;align-items:stretch;justify-content:center;margin-top:22px;">
                <div style="flex:1 1 120px;min-width:120px;max-width:180px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);padding:18px;display:flex;align-items:center;justify-content:center;">
                    <strong>Tag:</strong>&nbsp;<span>${clan.tag}</span>
                </div>
                <div style="flex:1 1 180px;min-width:150px;max-width:220px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);padding:18px;display:flex;align-items:center;gap:10px;justify-content:center;">
                    <img src="images/cwl.webp" width="28">
                    <div>
                        <strong>CWL League:</strong> <span>${clan.cwl_league}</span>
                    </div>
                </div>
                <div style="flex:1 1 180px;min-width:150px;max-width:220px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);padding:18px;display:flex;align-items:center;gap:10px;justify-content:center;">
                    <img src="images/raid.jpg" width="28">
                    <div>
                        <strong>Avg. Raid Medals:</strong> <span>${clan.raid_medals}</span>
                    </div>
                </div>
                <div style="flex:1 1 180px;min-width:150px;max-width:220px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);padding:18px;display:flex;align-items:center;gap:10px;justify-content:center;">
                    <img src="images/Capital.webp" width="28">
                    <div>
                        <strong>Clan Capital:</strong> <span>${clan.clan_capital}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}