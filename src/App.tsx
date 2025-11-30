import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import { LocaleProvider } from "./common/LocaleContext";
import type { TanstackRouter } from "./main";

const queryClient = new QueryClient();

type AppProps = { router: TanstackRouter };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<LocaleProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</LocaleProvider>
	);
};

export default App;
