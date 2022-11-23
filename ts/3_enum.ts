enum Membership {
	Simple,
	Standart,
	Premium
}

const membership = Membership.Standart

console.log(membership)

const membershipRevers = Membership[2]

console.log(membershipRevers)

enum SocialMedia {
	VK = 'VK',
	FC = 'Facebook',
	INST = 'Instagram'
}

const social = SocialMedia.INST