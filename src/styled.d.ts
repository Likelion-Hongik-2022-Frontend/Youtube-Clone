import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		textColor: string;
		bgColor: string;
		contentBgColor: string;
		badgeColor: string;
		endPointColor: string;
		borderColor: string;
	}
}
