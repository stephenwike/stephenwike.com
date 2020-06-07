export class Constants {

    // Authorization Server Constants
    public static authServer = {
        authorizationEndpoint: 'http://localhost:9003/authorize',
        tokenEndpoint: 'http://localhost:9003/token'
    }

    public static rsaKey = {
        "alg": "RS256",
        "d": "ZXFizvaQ0RzWRbMExStaS_-yVnjtSQ9YslYQF1kkuIoTwFuiEQ2OywBfuyXhTvVQxIiJqPNnUyZR6kXAhyj__wS_Px1EH8zv7BHVt1N5TjJGlubt1dhAFCZQmgz0D-PfmATdf6KLL4HIijGrE8iYOPYIPF_FL8ddaxx5rsziRRnkRMX_fIHxuSQVCe401hSS3QBZOgwVdWEb1JuODT7KUk7xPpMTw5RYCeUoCYTRQ_KO8_NQMURi3GLvbgQGQgk7fmDcug3MwutmWbpe58GoSCkmExUS0U-KEkHtFiC8L6fN2jXh1whPeRCa9eoIK8nsIY05gnLKxXTn5-aPQzSy6Q",
        "e": "AQAB",
        "n": "p8eP5gL1H_H9UNzCuQS-vNRVz3NWxZTHYk1tG9VpkfFjWNKG3MFTNZJ1l5g_COMm2_2i_YhQNH8MJ_nQ4exKMXrWJB4tyVZohovUxfw-eLgu1XQ8oYcVYW8ym6Um-BkqwwWL6CXZ70X81YyIMrnsGTyTV6M8gBPun8g2L8KbDbXR1lDfOOWiZ2ss1CRLrmNM-GRp3Gj-ECG7_3Nx9n_s5to2ZtwJ1GS1maGjrSZ9GRAYLrHhndrL_8ie_9DS2T-ML7QNQtNkg2RvLv4f0dpjRYI23djxVtAylYK4oiT_uEMgSkc4dxwKwGuBxSO0g9JOobgfy0--FUHHYtRi0dOFZw",
        "kty": "RSA",
        "kid": "authserver"
    };

    // TODO: This secret is example only.  Put in credential store like Vault.
    public static clients = [
        {
            "client_id": "globomantics-client-1",
            "client_secret": "globomantics-client-secret-1",
            "redirect_uris": ["http://localhost:9000/callback"],
            "scope": "visits membershipTime averageWorkoutLength"
        }
    ];


    // APIs
    // public static "http://fireshellstudio.us:8003";

    public static clientRoot = "clientRoot";

    public static apiRoot = "apiRoot";
    public static stsAuthority = "stsAuthority";

    public static clientId = "stephenwwike-web-client";
}