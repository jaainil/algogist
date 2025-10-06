interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Jainil Prajapati', // Site author
	title: 'Algogist', // Site title.
	description:
		'Algogist is a next-gen AI & tech media platform delivering sharp insights, deep dives, and no-BS breakdowns of the latest in artificial intelligence, coding, and emerging technologies.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
