.env with mongo connection string and SECRET required






User does action 
(click button, fill out form, or other trigger [onClick, onSubmit etc], or useEffect action (component mounts, data changes...))


Event Handler / Callback Function is called in REACT COMPONENT
<--> users-service.js <--> users-api.js <---> 
(We don't do non-react logic in react components we do them in services/utilities, not because we can't but we do it to be organized, and make it easier to let react specialists focus on react and others worry about non-react logic)
<-FETCH Request Over Internet->
server.js <--> Routes <--> Controllers

<-Send Response Over Internet->
users-api.js <--> users-service.js <--->

Back to REACT COMPONENT
