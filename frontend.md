# Frontend

# Apollo client

### Create project with typescript

```
npx create-next-app client --typescript
```

## **Setting up Apollo Client**

```
yarn add @apollo/client graphql
```

### add client file `lib/client.ts`

```ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: "https://apollo-handbook-api.vercel.app/api/graphql",
    cache: new InMemoryCache(),
})
export default client
```

### import client

```ts
import { ApolloProvider } from "@apollo/client";
...
return (
	<ApolloProvider client={client}>
      <Books books={books} />
  </ApolloProvider>
);
...
```

### consum client

With default client pass down

```ts
import { useQuery } from "@apollo/client";

const { loading, error, data } = useQuery<AllBooksQuery>(allBooksQuery);
```

To specify another client, both query & mutation supports `client` variable:

```ts
import { client2 } from '../../lib/client'

const [ loadBooks , {loading, error, data }] = useBooksQueryLazyQuery({client: client2});

const [createBookMutation, { data, called, loading, error }] = useCreateBookMutation( { client: client2})

```



# GraphQL

## Code Generator

```
yarn add -D @graphql-codegen/cli
```

that now to set the GraphQL Code Generator up:

```
yarn graphql-codegen init
```

> “What type of application are you building?”.
>
> >  =>   “Application built with React”,
>
> “Where is your schema?”
>
> > =>  https://apollo-handbook-api.vercel.app/api/graphql
>
> “Where are your operations and fragments?”
>
> > => components/\*\*/*.{tsx,ts}
>
>  pick some plugins
>
> > * TypeScript
> > * TypeScriptOperations
> > * TypeScriptReactApollo
>
> “Where to write the output”.
>
> > => lib/graphql.tsx
>
>  “Do you want to generate an introspection file?”
>
> > => no
>
> “How to name the config file?”
>
> > => codegen.yml
>
> “What script in package.json should run the codegen?”
>
> > =>“gql:codegen”

package.json:

​    "gql:codegen": "graphql-codegen --config codegen.yml"

1.  "@graphql-codegen/typescript-react-apollo":"3.2.2",
2.  "@graphql-codegen/typescript-operations":"2.2.1",
3.  "@graphql-codegen/typescript":"2.4.1"

```
yarn install
yarn gql:codegen
```

# LazyQuery

## Debouncing

```
yarn add use-debounce
```

>
>
>**import**{useDebouncedCallback}**from**"use-debounce";
>
>​	**const**_findBook=(title:**string**)=>{
>
>​	 loadBooks({ variables: { title } });
>
>​	 };
>
>**const**findBook=useDebouncedCallback(_findBook,250);

# Tailwind CSS

```
yarn add tailwindcss autoprefixer
```

Add followoing to styles/global.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

h1 {
  @apply text-4xl mb-4;
}

h2 {
  @apply text-3xl mb-4;
}

h3 {
  @apply text-2xl mb-4;
}

h4 {
  @apply text-xl mb-4;
}

a {
  @apply text-blue-600 underline;
}

ul {
  @apply list-disc list-inside;
}

.text-field {
  @apply shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
}

.text-field.has-error {
  @apply border-red-500 border-2;
}

.submit {
  @apply mt-4 bg-white font-bold border-2 py-2 px-4 rounded inline-block text-blue-500 border-blue-500;
}

.submit:disabled {
  @apply opacity-70 cursor-not-allowed;
}
```

# Form

## final form

```bash
yarn add react-final-form final-form
```

create a common form:

```ts
import { Form, Field, FieldRenderProps} from 'react-final-form'

const TextInput = ({ input, meta }: FieldRenderProps<string>) => {
    const hasError = meta.error && meta.touched
    return (
        <div>
            <input type="text" 
            className={`text-field ${hasError && "has-error"}` }
            {...input} />
            {hasError && <span className="text-red-500">{meta.error}</span>}
        </div>
    )    
}

type BookFormProps = {
    onSubmit: (value: any) => void
}

const required = (value: string) =>
    value ? undefined : "This field is required"

const BookForm = ({ onSubmit }: BookFormProps) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, hasValidationErrors }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title
                            <Field name="title" component={TextInput} validate={required} />
                        </label>
                        <input className="submit" type="submit" value="Create Book" 
                            disabled={hasValidationErrors}
                        />
                    </form> 
                )}    
            }
        />           
    )
}

export default BookForm
```

and a createForm:

```ts
import Form from './Form'
import { useCreateBookMutation } from '../../lib/graphql-local_generated'
import { client2 } from '../../lib/client'

function CreateForm() {
    const [createBookMutation, { data, called, loading, error }] = useCreateBookMutation( { client: client2})
    const onCreateBook = ({ title }: { title: string }) => {
        //console.log('title', title)
        createBookMutation({ variables: { title }})
    }

    return (
    <>
        <Form onSubmit={onCreateBook} />
        {called && !loading && !error && (
            <div className="text-green-500 mt-4">Book created successfully!</div> )}
    </>        
    )
}

export default CreateForm
```

