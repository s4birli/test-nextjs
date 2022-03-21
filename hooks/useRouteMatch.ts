import { useRouter } from "next/router";

export default function useRouteMatch(patterns: readonly string[]): string | null {
    const router = useRouter();

    const { pathname } = router;
    
    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = pattern.match(pathname);
        if (possibleMatch) {
            return pattern;
        }
    }

    return null;
}
