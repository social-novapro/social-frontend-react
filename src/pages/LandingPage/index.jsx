import React from "react";
import { useQuery } from "@apollo/client";
import { postPage } from '../../components/index';

export function LandingPage(props) {
    //const { loading, error, data } = useQuery(menuPageQuery)

    return (
        <div>
            <postPage />
        </div>
    );
}   