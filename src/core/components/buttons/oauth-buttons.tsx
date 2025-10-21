import React from 'react';
import GoogleOauthButton from "@/src/core/components/buttons/google-oauth-button";
import GithubOauthButton from "@/src/core/components/buttons/github-oauth-button";

const OauthButtons = () => {
    return (
        <div className={"flex flex-row items-center justify-between gap-4 font-nunito"}>
            <GoogleOauthButton />
            <GithubOauthButton />
        </div>
    );
};

export default OauthButtons;