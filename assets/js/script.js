const humberger = document.querySelector(".humberger-menu");
const navMenu = document.querySelector(".bottom-menu-mobile");
const menuItem = document.querySelectorAll(".menu-link-bottom");

// Open the pop up menu
humberger.addEventListener("click", () => {
	humberger.classList.toggle("change");
	navMenu.classList.toggle("show-menu");
});

// Close the pop menu
menuItem.forEach((n) => {
	n.addEventListener("click", () => {
		humberger.classList.remove("change");
		navMenu.classList.remove("show-menu")
	});
});


const speakerCardSection = [
    {
			image: 'assets/images/speaker_01.png',
			name: 'Kesley Hightower',
			occupation: 'Google DevOps Engineer',
			bio: 'Kelsey Hightower is an American software engineer, developer advocate, and speaker known for his work with Kubernetes, open-source software, and cloud computing',
    },
		{
			image: 'assets/images/speaker_02.png',
			name: 'Martin Fowler',
			occupation: 'Founder ThoughtWorks',
			bio: 'British software developer, author and international public speaker on software development, specialising in object-oriented analysis and design, UML, patterns, and agile software development methodologies, including extreme programming.',
    },
		{
			image: 'assets/images/speaker_03.png',
			name: 'Rosalind Radcliffe',
			occupation: 'Distinguished engineer, IBM',
			bio: `Radcliffe has worked at IBM for over 30 years. Currently she's an IBM distinguished engineer working with external clients on DevOps transformations and working internally on IBM's Z organization. She is a regular speaker at the DevOps Enterprise Summit and other enterprise-oriented conferences.`,
    },
		{
			image: 'assets/images/speaker_04.png',
			name: 'Jez Humble',
			occupation: 'Founder and CTO, DevOps Research and Assessment',
			bio: 'Humble is a co-author of the book Continuous Delivery, as well as Lean Enterprise and The DevOps Handbook. ',
    },
		{
			image: 'assets/images/speaker_05.png',
			name: 'Jennifer Davis',
			occupation: 'Senior systems engineer, Chef',
			bio: 'Davis is a speaker at many DevOps conferences as well as an organizer for her local DevOpsDays. She has also worked at Yahoo as the team lead for its Sherpa cloud storage service.',
    },
		{
			image: 'assets/images/speaker_06.png',
			name: 'Dave Farley',
			occupation: 'Google DevOps Engineer',
			bio: 'Farley is a significant thought leader in the DevOps community who co-authored the award-winning book Continuous Delivery with Jez Humble. He continues to speak and write frequently.',
    }
]; 

speakerCardSection.forEach((ele, index) => {
	const card = document.querySelector(".speakers-section");
	const cardContainer = document.createElement("div");
	cardContainer.classList = 'card-container';

	const speakerSectionHTML = `
		<div class="speaker-container" id="speaker-container">
			<div class="speaker-image">
				<img class="speaker-img" src="${speakerCardSection[index].image}" alt="${speakerCardSection[index].name} picture">
			</div>
			<div class="speaker-text">
				<h3 class="name">${speakerCardSection[index].name}</h3>
				<p class="para">
					${speakerCardSection[index].occupation}
				</p>
				<div class="line-seperator"></div>
				<p class="bio">
					${speakerCardSection[index].bio}
				</p>
			</div>
		</div>
	`;
	cardContainer.innerHTML += speakerSectionHTML;
	card.appendChild(cardContainer);

});