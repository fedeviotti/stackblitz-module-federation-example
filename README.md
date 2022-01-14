A project with three apps, they are federated modules with webpack 5

app1: host, expose Filter component and consume app2 and app3
app2: remote, consume Filter component
app3: remote consume Filter component

Using Typescript i created a shared/types folder inside app1, and it is configurated in the tsconfig files of the remotes app in order to be imported to have type checking working while developing.
