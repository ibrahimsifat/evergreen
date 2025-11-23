const https = require("https");
const http = require("http");

// Helper function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const requestOptions = {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };

    const req = client.request(url, requestOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on("error", reject);

    if (options.body) {
      req.write(JSON.stringify(options.body));
    }

    req.end();
  });
}

async function testUpdateOperations() {
  const baseUrl = "http://localhost:3000";

  console.log("🧪 Testing Update Operations...\n");

  try {
    // Test 1: Get a project to update
    console.log("📋 Testing Project Update:");
    const projectsResponse = await makeRequest(`${baseUrl}/api/cms/projects`);

    if (
      projectsResponse.data.success &&
      projectsResponse.data.data.length > 0
    ) {
      const project = projectsResponse.data.data[0];
      console.log(`  📄 Found project: ${project.title} (ID: ${project.id})`);

      // Test update with _id field included (should be filtered out)
      const updateData = {
        ...project,
        title: `${project.title} - Updated Test`,
        updatedAt: new Date().toISOString(),
      };

      const updateResponse = await makeRequest(
        `${baseUrl}/api/cms/projects/${project.id}`,
        {
          method: "PUT",
          body: updateData,
        }
      );

      if (updateResponse.status === 200 && updateResponse.data.success) {
        console.log(
          `  ✅ Project update successful - Status: ${updateResponse.status}`
        );
        console.log(`  📝 Updated title: ${updateResponse.data.data.title}`);
      } else {
        console.log(
          `  ❌ Project update failed - Status: ${updateResponse.status}`
        );
        console.log(
          `  📝 Error: ${updateResponse.data.message || "Unknown error"}`
        );
      }
    }

    // Test 2: Get a service to update
    console.log("\n🔧 Testing Service Update:");
    const servicesResponse = await makeRequest(`${baseUrl}/api/cms/services`);

    if (
      servicesResponse.data.success &&
      servicesResponse.data.data.length > 0
    ) {
      const service = servicesResponse.data.data[0];
      console.log(`  📄 Found service: ${service.title} (ID: ${service.id})`);

      // Test update with _id field included (should be filtered out)
      const updateData = {
        ...service,
        description: `${service.description} - Updated Test`,
        updatedAt: new Date().toISOString(),
      };

      const updateResponse = await makeRequest(
        `${baseUrl}/api/cms/services/${service.id}`,
        {
          method: "PUT",
          body: updateData,
        }
      );

      if (updateResponse.status === 200 && updateResponse.data.success) {
        console.log(
          `  ✅ Service update successful - Status: ${updateResponse.status}`
        );
        console.log(
          `  📝 Updated description: ${updateResponse.data.data.description.substring(
            0,
            50
          )}...`
        );
      } else {
        console.log(
          `  ❌ Service update failed - Status: ${updateResponse.status}`
        );
        console.log(
          `  📝 Error: ${updateResponse.data.message || "Unknown error"}`
        );
      }
    }

    // Test 3: Get a client to update
    console.log("\n👥 Testing Client Update:");
    const clientsResponse = await makeRequest(`${baseUrl}/api/cms/clients`);

    if (clientsResponse.data.success && clientsResponse.data.data.length > 0) {
      const client = clientsResponse.data.data[0];
      console.log(`  📄 Found client: ${client.name} (ID: ${client.id})`);

      // Test update with _id field included (should be filtered out)
      const updateData = {
        ...client,
        description: `${client.description} - Updated Test`,
        updatedAt: new Date().toISOString(),
      };

      const updateResponse = await makeRequest(
        `${baseUrl}/api/cms/clients/${client.id}`,
        {
          method: "PUT",
          body: updateData,
        }
      );

      if (updateResponse.status === 200 && updateResponse.data.success) {
        console.log(
          `  ✅ Client update successful - Status: ${updateResponse.status}`
        );
        console.log(
          `  📝 Updated description: ${updateResponse.data.data.description.substring(
            0,
            50
          )}...`
        );
      } else {
        console.log(
          `  ❌ Client update failed - Status: ${updateResponse.status}`
        );
        console.log(
          `  📝 Error: ${updateResponse.data.message || "Unknown error"}`
        );
      }
    }

    console.log("\n🎉 Update operations test completed!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
}

// Run the test
testUpdateOperations().catch(console.error);
