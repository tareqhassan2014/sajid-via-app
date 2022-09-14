import ScrollTop from './components/ScrollTop';
import Routes from './routes';
import ThemeCustomization from './themes';

function App() {
    return (
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    );
}

export default App;
