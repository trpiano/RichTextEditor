import 'styled-components'

declare module 'styled-components' {

    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            switch: string;

            background: string;
            text: string;

            //Tool Bar Style
            toolbar_background: string;
            toolbar_border: string;
            toolbar_text: string;

            //Wrapper Style
            wrapper_border_color: string;
            wrapper_text: string;
        }
    }
}
