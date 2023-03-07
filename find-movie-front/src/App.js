import { MainPage } from "./pages/MainPage";
import { UserProvider } from "./provider/UserProvider";

export const App = () => {
  return (
    <UserProvider>
      <MainPage />
    </UserProvider>    
  );
}
