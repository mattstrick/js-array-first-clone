plugins {
    kotlin("jvm") version "2.0.0"
}

group = "com.mattstrick"
version = "1.0.2"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}
