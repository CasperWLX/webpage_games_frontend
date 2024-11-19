import { jwtDecode } from "jwt-decode";

export function isTokenValid(token: string): boolean {
    try {
        const decoded: { exp: number } = jwtDecode(token);
        return decoded.exp * 1000 > Date.now(); // Check if token is expired
    } catch (error) {
        return false; // Invalid token
    }
}
