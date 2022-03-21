import {Box} from "@mui/system";

export function ContainerComponent(
    {children}: { children: JSX.Element }
) {
    return (

        <Box paddingX={4} paddingY={2}>
            {children}
        </Box>
    )
}
