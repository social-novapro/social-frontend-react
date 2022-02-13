import React from 'react'

export function NavigationBar(){ 
    return (
        <div class="nav" id="nav">
            <button class="buttonStyled"  onclick="switchNav(1)" id="page1">Live Chat</button>
            <button class="buttonStyled"  onclick="switchNav(2)" id="page2">Profile</button>
            <button class="buttonStyled"  onclick="switchNav(3)" id="page3">DevMode</button>
            <button class="buttonStyled"  onclick="switchNav(4)" id="page4">Create Post</button>
            <button class="buttonStyled"  onclick="showModal()" id="page4">show</button>
        </div>
    )
}
