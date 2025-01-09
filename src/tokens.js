import P69Util from '@paulio/p69-util'

const colors = {
	// Very light
	ice_cream: '#fafafa',
	very_light_sky_blue: '#e7f5ff',
	light_sky_purple: '#d2d2e6',

	// Light
	rosy_red: '#ff9191',
	burly_wood: '#deb887',
	burly_wood_50: '#deb88788',

	// Mid
	jet_blue: '#1e55af',
	jet_blue_50: '#1e55af88',
	blood_red: '#731010',
	blood_red_50: '#73101088',

	// Dark
	dark_grey: '#1d1d20',
	dark_navy: '#050a23',

	// Very dark
	dark_navy_grey: '#050a3c',
	very_dark_grey: '#121212',
}

const font = {
	size: {
		// https://utopia.fyi/type/calculator?c=320,14,1.2,1600,18,1.25,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
		xs: 'clamp(0.60rem, calc(0.58rem + 0.09vw), 0.67rem)',
		sm: 'clamp(0.75rem, calc(0.71rem + 0.18vw), 0.89rem)',
		md: 'clamp(0.94rem, calc(0.88rem + 0.31vw), 1.19rem)',
		lg: 'clamp(1.17rem, calc(1.07rem + 0.51vw), 1.58rem)',
		xl: 'clamp(1.47rem, calc(1.30rem + 0.81vw), 2.11rem)',
		'2xl': 'clamp(1.83rem, calc(1.59rem + 1.23vw), 2.81rem)',
		'3xl': 'clamp(2.29rem, calc(1.92rem + 1.83vw), 3.75rem)',
		'4xl': 'clamp(2.86rem, calc(2.33rem + 2.67vw), 5.00rem)',
		'5xl': 'clamp(3.58rem, calc(2.80rem + 3.86vw), 6.66rem)',
	},
	family: {
		nunito: ['Nunito', 'sans-serif', 'Helvetica', 'Verdana'],
	},
}

const widths = {
	min: 320, // px
	xs: 600,
	sm: 720,
	md: 920,
	lg: 1200,
}

const spaces = {
	xs: 8, // px
	sm: 16,
	md: 32,
	lg: 64,
	xl: 128,
}

const lightTheme = {
	color: P69Util.colorMap(colors, {
		formats: ['', 'raw'],
		defaultFormat: 'hex',
	}),
	theme: {
		bg: colors.ice_cream,
		text: colors.very_dark_grey,
		strong: colors.jet_blue,
		border: colors.jet_blue_50,
	},
	cotheme: {
		bg: colors.dark_grey,
		text: colors.ice_cream,
		strong: colors.burly_wood,
		border: colors.blood_red,
	},
	font,
	width: P69Util.sizeMap(widths, {
		formats: [''],
		defaultFormat: 'px',
	}),
	space: P69Util.sizeMap(spaces, {
		formats: ['', 'px'],
		defaultFormat: 'rem',
	}),
}

const darkTheme = {
	theme: {
		bg: colors.dark_grey,
		text: colors.ice_cream,
		strong: colors.burly_wood,
		border: colors.blood_red,
	},
	cotheme: {
		bg: colors.very_dark_grey,
		text: colors.ice_cream,
		strong: colors.burly_wood,
		border: colors.blood_red,
	},
}

const newVariableGenerator = (theme) => {
	return (prefix = '') => P69Util.generateVariables(theme, { prefix })
}

export default {
	width: P69Util.sizeMappers(widths, { defaultFormat: 'px' }),
	variables: {
		light: newVariableGenerator(lightTheme),
		dark: newVariableGenerator(darkTheme),
	},
}
