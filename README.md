# Astrolith-MVP  🌟

## Welcome to the Astrolith MVP repository

<p align="center" width="100%">
  <img src="https://github.com/Astrolith-Unleash-the-Programmer-in-You/astrolith-frontend/assets/58889001/09c81dff-4a02-4d68-9fbf-0e831a95e45f" alt="site"/>
</p>

> ## Table of contents
- [Overview](#overview)
- [Core Features Implemented](#core-features-implemented)
- [Technologies](#technologies)
- [Repo Setup](#repo-setup)
- [Requirements](#requirements)
- [Setup the Project](#setup-the-project)
- [Setup the Frontend](#setup-the-frontend)
  - [Install Dependencies](#install-dependencies)
  - [Steps to host the live site on Vercel](#steps-to-host-the-live-site-on-vercel)
- [Live Link](#live-link)
- [Contributors](#contributors)
- [Contributing to the project](#contributing-to-the-project)
#
> ## Overview
<p align="justify">
Traditional methods of teaching programming often lack engagement, leading to difficulties in grasping abstract concepts. Astrolith addresses this gap by providing an innovative, hands-on learning experience within a gaming framework. It targets learners who find conventional programming education challenging or monotonous, also developers who dont solidify themself in the basics of programming
</p>



#
> ## Core Features Implemented
> 
>**Web5 Connection and Decentralized Profile**:

- Users establish their decentralized identifiers (DIDs) linked to their usernames, creating decentralized profiles.

- The decentralized profile is pivotal in certificate generation and serves as a secure and personalized user identity within the game.

>**Player Profile Management**:

- Players can update their profiles directly from their Decentralized Web Network (DWN) accounts.

- Player profiles play a crucial role in generating verifiable credentials (certificates), aligning user data with certificates.

>**Certificate Generation Process**:

- Upon completing a game stage, a verifiable credential (certificate) is generated.

- The certificate's HTML template converts into a base64 image containing player information, metadata (issuing protocol, validity period), and user data linked to the player's DID.

>**Displaying Certificates, Achievements, and Collectibles**:

- Users' obtained certificates, achievements, and collectibles are fetched from the DWN based on the logged-in user, providing a comprehensive overview.

>**Certificate Verification**:

- Verifiable credentials (certificates) obtained by users can be verified via a presentation exchange leveraging the game's protocol, ensuring credibility and validity across various platforms.

>**Decentralized Data Storage for Game Content**:

- All game content, including questions, test cases, achievements, and user information, is stored on the Decentralized Web Network, ensuring decentralized and secure data management.

>**Top Players Feature**:

- The application features a 'Top Players' section, showcasing the achievements and performance of leading players within the game, promoting competition and engagement.

</p>

#
> ## Technologies
| <b><u>Stack</u></b> | <b><u>Usage</u></b> |
| :------------------ | :------------------ |
| **`Web5`**      | Backend     |
| **`React JS + tailwind`**      | Frontend |

#
> ## Repo Setup

<p align="justify">
To setup the repo, first fork the astrolith-frontend Repo, then clone the forked repository to create a copy on the local machine.
</p>

    $ git clone https://github.com/Astrolith-Unleash-the-Programmer-in-You/astrolith-frontend.git

<p align="justify">
Change directory to the cloned repo and set the original astrolith-frontend repository as the "upstream" and your forked repository as the "origin" using gitbash. and make sure to switch to dev branch
</p>

    $ git remote add upstream  https://github.com/Astrolith-Unleash-the-Programmer-in-You/astrolith-frontend.git

#

> ## Requirements
#
- Node JS

#
> ## Setup the Frontend
- First run the frontend on your local server to ensure it's fully functional before building for production.
#
1. Clone the repository

```
git clone https://github.com/Astrolith-Unleash-the-Programmer-in-You/astrolith-frontend.git
```

2. Navigate to the project folder

```
cd astrolith-frontend
```

3. Install dependencies

```
npm install
```

4. To start the server run

```
npm run dev
```


# 

## Useful links

## View attribution files here




 [Game experience flow](https://docs.google.com/document/d/15H4Ld8YAlNUtn7HLHPbGxgmx5bog84uPKCCi57QgrX0/edit?usp=sharing)

 [Game storyline](https://docs.google.com/document/d/1nJe39hxRFU8lLWfrjFouptqu2lE0o8C_cCp5RJwG48Q/edit?usp=sharing)
 
 [Characters/models/enviruments/collectibles of the game](https://drive.google.com/drive/folders/1Eyj6SsZdm_dDeHYd1MPrvAFfscwx-7DZ)



## Explainer video (User POV)

https://github.com/Astrolith-Unleash-the-Programmer-in-You/astrolith-frontend/assets/58889001/6983bbd4-17a3-44dd-9bd2-9037c8fb9d37




## Demo Video (Clients POV)




- [Pitch Deck](https://www.figma.com/proto/fF7nfgJVEh7QN204NMjX3N/Astrolith?type=design&node-id=402-5459&t=wnw7UsraHJC2NoJO-1&scaling=scale-down-width&page-id=112%3A27225&starting-point-node-id=402%3A5459&mode=design )
- [Frontend Deployment](https://astro-client-dma2.vercel.app/)



> ## Contributors

This Project was created by these awesome dedicated members

<p align="center" width="100%">
  <img src="https://github.com/Astrolith-Unleash-the-Programmer-in-You/astrolith-frontend/assets/58889001/8333478d-a884-47bd-867c-8629deeab965" alt="Team"/>
</p>


> ## What's next for Astrolith
>**Expansion of Game Content**: 

- Continuously enriching the game's content with new levels, challenges, and engaging quests to provide players with an ever-evolving and immersive experience.

>**Integration of Advanced Programming Concepts**: 

- Incorporating more advanced programming concepts into the gameplay, catering to users seeking higher-level challenges and enhancing their coding skills.

>**Exploration of Partnerships**: 

- Seeking collaborations and partnerships within the tech and educational sectors to further enhance Astrolith's offerings. Partnerships could involve educational institutions, tech companies, or experts to enrich the learning experience and broaden the game's reach.




#
> ## Contributing to the project

If you find something worth contributing, please fork the repo, make a pull request and add valid and well-reasoned explanations about your changes or comments.

Before adding a pull request, please note:

- This is an open source project.
- Your contributions should be inviting and clear.
- Any additions should be relevant.
- New features should be easy to contribute to.

All **`suggestions`** are welcome!
#
> ##### README Created by `Enebeli Emmanuel` for Astrolith
