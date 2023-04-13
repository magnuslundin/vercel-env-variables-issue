# Project demonstrating Vercel env variable issue

## Run the project with pnpm
````
pnpm install
pnpm run dev
````
Verification of the token should is successful and the content appears in both occasions (key AS-IS and key with escaped new-lines):
````
{"hello":"world","iat":1681402620,"exp":1681406220}
````
## Deploy the project to Vercel
````
vc deploy
````
Follow the instructions, then go to the Vercel dashboard and add the variables from .env as project env variables.
Rename or remove the .env-file.
````
vc pull
vc dev
````
Verfication of the token now fail AS-IS. The public key need to have it's new-lines escaped in order to work properly. What has been inserted into the dashboard is not what one gets.
