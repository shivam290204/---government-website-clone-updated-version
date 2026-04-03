package com.shivam.backend.service;

import com.shivam.backend.dto.ApplicationRequest;
import com.shivam.backend.exception.BadRequestException;
import com.shivam.backend.exception.ResourceNotFoundException;
import com.shivam.backend.model.Application;
import com.shivam.backend.model.User;
import com.shivam.backend.repository.ApplicationRepository;
import com.shivam.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    private static final Set<String> VALID_STATUSES = Set.of("PENDING", "APPROVED", "REJECTED");

    private final ApplicationRepository applicationRepository;
    private final UserRepository userRepository;

    public Application submitApplication(ApplicationRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + request.getUserId()));

        Application application = Application.builder()
                .title(request.getTitle().trim())
                .description(request.getDescription().trim())
                .status("PENDING")
                .user(user)
                .build();

        return applicationRepository.save(application);
    }

    public List<Application> getApplicationsByUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User not found with id: " + userId);
        }
        return applicationRepository.findByUserId(userId);
    }

    public Application updateStatus(Long applicationId, String status) {
        String normalizedStatus = status == null ? "" : status.trim().toUpperCase();
        if (!VALID_STATUSES.contains(normalizedStatus)) {
            throw new BadRequestException("Invalid status. Use PENDING, APPROVED, or REJECTED");
        }

        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id: " + applicationId));

        application.setStatus(normalizedStatus);
        return applicationRepository.save(application);
    }
}
