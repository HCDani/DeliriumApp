package com.example.greetingcard

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.greetingcard.ui.theme.GreetingCardTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            GreetingCardTheme {
                GreetingCardApp() // Use the navigation composable here
            }
        }
    }
}

@Composable
fun HomeScreen(onNavigate: () -> Unit, onProfileNavigate: () -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Top // Align items at the top
    ) {
        // Header Text
        Text(
            text = "Deliriumværktøjet",
            style = MaterialTheme.typography.headlineMedium,
            modifier = Modifier.padding(16.dp),
            color = Color.Black // Set the text color to black for visibility
        )

        // Image below the header
        Image(
            painter = painterResource(id = R.drawable.background_image), // Use your own image resource here
            contentDescription = "Background Image",
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 16.dp),
            contentScale = ContentScale.Crop
        )

        // Buttons for navigation options
        Button(
            onClick = { onNavigate() },
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 4.dp)
        ) {
            Text("Symptomer")
        }

        Button(
            onClick = { onNavigate() },
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 4.dp)
        ) {
            Text("Screeningsværktøjer")
        }

        Button(
            onClick = { onNavigate() },
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 4.dp)
        ) {
            Text("Forebyggelse")
        }

        // Button to navigate to the profile screen
        Button(
            onClick = { onProfileNavigate() },
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 16.dp)
        ) {
            Text("Go to Profile")
        }
    }
}

@Composable
fun ProfileScreen(onNavigateBack: () -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = "Profile Screen", style = MaterialTheme.typography.headlineMedium)
        Button(onClick = { onNavigateBack() }) {
            Text("Go Back")
        }
    }
}

@Composable
fun GreetingCardApp() {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = "home") {
        composable("home") {
            HomeScreen(
                onNavigate = { /* Placeholder action, add more actions as needed */ },
                onProfileNavigate = { navController.navigate("profile") }
            )
        }
        composable("profile") {
            ProfileScreen(onNavigateBack = { navController.popBackStack() })
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    GreetingCardTheme {
        HomeScreen(
            onNavigate = {},
            onProfileNavigate = {}
        )
    }
}
